import { useCallback, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { ChatUI } from '@/components/chat/conversations-ui/ChatUI.jsx';
import { MessageRole } from '@/enums/MessageRole.js';

const RightSideBar = () => {
  const { user } = useUser();
  const [isQuerying, setIsQuerying] = useState(false);
  const [chatConversations, setChatConversations] = useState([
    {
      id: '1',
      role: MessageRole.ASSISTANT,
      message:
        'I am a sample chat ui made by Mr Walid (@Sboui).  Welcome here ness lkol w ........ let me know if you have any questions. loem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      role: MessageRole.USER,
      message: 'Amazing. Mr walid !!!!',
    },
    {
      id: '3',
      role: MessageRole.ASSISTANT,
      message: 'Thanku you and hope u r ok',
    },
  ]);

  const handleSubmit = useCallback((value) => {
    setIsQuerying(true);
    setChatConversations((conversations) => [
      ...conversations,
      {
        id: (conversations.length + 1).toString(),
        role: MessageRole.USER,
        message: value,
      },
    ]);
    setTimeout(() => {
      setIsQuerying(false);
      setChatConversations((conversations) => [
        ...conversations,
        {
          id: (conversations.length + 1).toString(),
          role: MessageRole.ASSISTANT,
          message: 'This is a response thank you again !',
        },
      ]);
    }, 3000);
  }, []);

  return (
    <ChatUI
      userAvatar={user.imageUrl}
      isQuerying={isQuerying}
      onSubmit={handleSubmit}
      placeholder="Type here to ask a question..."
      disabled={isQuerying}
      conversations={chatConversations}
    />
  );
};

export default RightSideBar;
