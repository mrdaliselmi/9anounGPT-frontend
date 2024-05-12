import { useEffect } from 'react';
import { IconLoader } from '@tabler/icons-react';
import { ChatMessage } from '@/components/chat/conversations-ui/ChatMessage.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';

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
    <ScrollArea>
      <div className="ml-16 w-3/4">
        {conversations &&
          conversations.map((chatEntry) => (
            <ChatMessage
              key={`chatbot-message-${chatEntry.id}`}
              message={chatEntry}
              userAvatar={userAvatar}
            />
          ))}
        {/* todo : add skeleton instead of icon loader */}
        {isQuerying && <IconLoader variant="dots" className="h-8 w-8" />}
      </div>
    </ScrollArea>
  );
};
