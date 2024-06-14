import { useRef } from 'react';
import { ConversationChat } from '@/components/chat/rightSideBar/ConversationChat.jsx';
import { QuestionInput } from '@/components/chat/rightSideBar/QuestionInput.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';

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
    <div className="w-full">
      <div
        className="flex-grow overflow-y-auto py-4 ml-40 max-h-[calc(100vh-170px)]"
        ref={chatConversationsContainerRef}
      >
        <ConversationChat
          conversations={conversations}
          isQuerying={isQuerying}
          chatConversationsContainerRef={chatConversationsContainerRef}
          userAvatar={userAvatar}
        />
      </div>
      <QuestionInput
        disabled={disabled}
        onSubmit={onSubmit}
        placeholder={placeholder}
      />
      <Toaster />
    </div>
  );
};
