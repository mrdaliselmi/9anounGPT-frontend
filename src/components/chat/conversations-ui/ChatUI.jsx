import { useRef } from 'react';
import { QuestionInput } from '@/components/chat/conversations-ui/QuestionInput.jsx';
import { ConversationChat } from '@/components/chat/conversations-ui/ConversationChat.jsx';

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
    <>
      <div
        className="flex w-full justify-center overflow-y-auto pb-8"
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
      <div className="absolute left-0 w-full" />
      <QuestionInput
        disabled={disabled}
        onSubmit={onSubmit}
        placeholder={placeholder}
      />
    </>
  );
};
