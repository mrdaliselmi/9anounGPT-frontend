/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ChatUI } from '@/components/chat/rightSideBar/ChatUI.jsx';
import { MessageRole } from '@/enums/MessageRole.js';
import {
  addMessage,
  initializeConversation,
} from '@/app/state/conversation/conversationSlice.js';
import { useWebSocket } from '@/context/webSocketContext.jsx';
import { useFetchConversationHistoryQuery } from '@/app/state/conversation/conversationApiSlice.js';
import { MessageSkeleton } from '@/components/chat/skeleton/MessageSkeleton.jsx';

const RightSideBar = () => {
  const { socket, user, isQuerying, setIsQuerying } = useWebSocket();
  console.log(isQuerying);
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const conversation = useSelector((state) => state.conversations);
  const messages =
    conversation.currentConversation === uuid ? conversation.messages : [];
  const [fetchedConversation, setFetchedConversation] = useState([]);
  const {
    data: fetchedConversationData,
    isLoading,
    error: fetchedConversationError,
  } = useFetchConversationHistoryQuery({
    conversationId: uuid,
    userId: user.id,
  });

  useEffect(() => {
    if (fetchedConversationData?.length > 0) {
      dispatch(
        initializeConversation({
          conversation_id: uuid,
          messages: fetchedConversationData,
        }),
      );
    }
  }, [fetchedConversationData, dispatch, uuid]);

  useEffect(() => {
    if (socket) {
      socket.on('response', (data) => {
        const chunk = data.data;
        dispatch(
          addMessage({
            conversationId: uuid,
            role: MessageRole.ASSISTANT,
            message: chunk,
          }),
        );

        if (chunk.endsWith('\n\n')) {
          setIsQuerying(false);
        }
        return {};
      });

      return () => {
        socket.off('response');
      };
    }
  }, [socket, dispatch, uuid]);

  const handleSubmit = useCallback(
    (value) => {
      if (!socket) return;
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

  if (isLoading) {
    return Array.from({ length: 2 }).map((_, index) => (
      <MessageSkeleton key={index} />
    ));
  }

  return (
    <ChatUI
      userAvatar={user.imageUrl}
      isQuerying={isQuerying}
      onSubmit={handleSubmit}
      placeholder="Type here to ask 9anounGPT a question..."
      disabled={isQuerying}
      conversations={messages}
    />
  );
};

export default RightSideBar;
