/* eslint-disable consistent-return */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ChatUI } from '@/components/chat/rightSideBar/ChatUI.jsx';
import { MessageRole } from '@/enums/MessageRole.js';
import { addMessage } from '@/app/state/conversation/conversationSlice.js';
import { useWebSocket } from '@/context/webSocketContext.jsx';

const RightSideBar = () => {
  const { socket, user } = useWebSocket();
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const conversation = useSelector((state) => state.conversations);
  const [isQuerying, setIsQuerying] = useState(false);
  const [fetchedConversation, setFetchedConversation] = useState(null);
  const fetchOldConversationHistory = () => {
    const url = `http://192.168.1.14:5000/get_history?conversation_id=${uuid}&user_id=${user.id}`;
    fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.map((message) => {
          message = JSON.parse(message);
          return {
            role:
              message.type === 'human'
                ? MessageRole.USER
                : MessageRole.ASSISTANT,
            message: message.data?.content,
          };
        });
        setFetchedConversation({ messages: fetchedData });
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchOldConversationHistory();
    if (socket) {
      socket.on('response', (data) => {
        const chunk = data.data;
        // console.log('Received chunk:', chunk);

        dispatch(
          addMessage({
            conversationId: uuid,
            role: MessageRole.ASSISTANT,
            message: chunk,
          }),
        );

        if (chunk.endsWith('\n\n')) {
          // console.log('Received final chunk');
          setIsQuerying(false);
        }
        return {};
      });

      return () => {
        socket.off('response');
      };
    }
  }, [socket, dispatch, uuid, conversation]);

  const handleSubmit = useCallback(
    (value) => {
      if (!socket) return;
      // console.log('Sending request from RightSideBar');
      setIsQuerying(true);
      dispatch(
        addMessage({
          conversationId: uuid,
          role: MessageRole.USER,
          message: value,
        }),
      );
      socket.emit('question', {
        conversation_id: uuid,
        question: value,
        user_id: user.id,
      });
    },
    [uuid, dispatch, user.id, socket],
  );

  if (!conversation) {
    return <div>Loading...</div>;
  }

  return (
    <ChatUI
      userAvatar={user.imageUrl}
      isQuerying={isQuerying}
      onSubmit={handleSubmit}
      placeholder="Type here to ask 9anounGPT a question..."
      disabled={isQuerying}
      conversations={fetchedConversation ? fetchedConversation.messages : []}
    />
  );
};

export default RightSideBar;
