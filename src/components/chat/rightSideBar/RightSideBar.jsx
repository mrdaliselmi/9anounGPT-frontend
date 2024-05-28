import { useCallback, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ChatUI } from '@/components/chat/rightSideBar/ChatUI.jsx';
import { MessageRole } from '@/enums/MessageRole.js';
import { addMessage } from '@/app/state/conversation/conversationSlice.js';

const RightSideBar = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { uuid } = useParams();

  const conversation = useSelector((state) =>
    state.conversations.conversations.find((conv) => conv.id === uuid),
  );

  const [isQuerying, setIsQuerying] = useState(false);

  const handleSubmit = useCallback(
    (value) => {
      setIsQuerying(true);
      dispatch(
        addMessage({
          conversationId: uuid,
          role: MessageRole.USER,
          message: value,
        }),
      );
      setTimeout(() => {
        setIsQuerying(false);
        dispatch(
          addMessage({
            conversationId: uuid,
            role: MessageRole.ASSISTANT,
            message: 'This is a response!',
          }),
        );
      }, 3000);
    },
    [uuid, dispatch],
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
      conversations={conversation.messages}
    />
  );
};

export default RightSideBar;
