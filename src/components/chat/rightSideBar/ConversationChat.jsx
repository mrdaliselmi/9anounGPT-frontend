import { useEffect } from 'react';
import { IconLoader } from '@tabler/icons-react';
import { ChatMessage } from '@/components/chat/rightSideBar/ChatMessage.jsx';
import { ScrollArea } from '@/components/ui/scroll-area';

export const ConversationChat = ({
  conversations,
  isQuerying,
  chatConversationsContainerRef,
  userAvatar,
}) => {
  useEffect(() => {
    const container = chatConversationsContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
    container.scrollTo(0, container.scrollHeight);
  }, [conversations]);
  return (
    <div>
      <ScrollArea className="h-full w-full">
        {conversations &&
          conversations.map((chatEntry) => (
            <ChatMessage
              key={`chatbot-message-${chatEntry.id}`}
              message={chatEntry}
              userAvatar={userAvatar}
            />
          ))}
        {isQuerying && (
          <div className="flex justify-center mt-4">
            <IconLoader variant="dots" className="h-8 w-8 animate-spin" />
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
