import { useRef } from 'react';
import { QuestionInput } from '@/components/chat/rightSideBar/QuestionInput.jsx';
import { ConversationChat } from '@/components/chat/rightSideBar/ConversationChat.jsx';

export const ChatUI = ({
  disabled,
  conversations,
  isQuerying,
  placeholder,
  onSubmit,
  userAvatar,
}) => {
  const chatConversationsContainerRef = useRef(null);
  return (
    <div className="   w-full">
      <div
        className="flex-grow overflow-y-auto"
        style={{ maxHeight: 'calc(100vh - 180px)' }}
        ref={chatConversationsContainerRef}
      >
        <ConversationChat
          conversations={conversations}
          isQuerying={isQuerying}
          chatConversationsContainerRef={chatConversationsContainerRef}
          userAvatar={userAvatar}
        />
      </div>
      <div className="p-4 bg-white ">
        <QuestionInput
          disabled={disabled}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
