import React, { useEffect, useState } from 'react';
import { PlusIcon, SparklesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HistoricChats from '@/components/chat/sideBar/HistoricChats.jsx';
import { useWebSocket } from '@/context/webSocketContext.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';
import logo from '/assets/logo.png';
import { useFetchUserHistoryQuery } from '@/app/state/conversation/conversationApiSlice.js';
import { ConversationSkeleton } from '@/components/chat/skeleton/ConversationSkeleton.jsx';

function SideBar() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);
  const { user } = useWebSocket();
  const newChat = () => {
    navigate('/chat');
  };
  const upgradeToPlus = () => {
    // console.log('Upgrade to Plus');
  };

  const {
    data: userHistory,
    isLoading,
    error: userHistoryError,
    success: userHistorySuccess,
  } = useFetchUserHistoryQuery({
    userId: user.id,
  });

  useEffect(() => {
    if (isLoading) {
      console.log('Loading user history');
    }
    if (userHistory) {
      setConversations(userHistory);
      console.log('userHistory', userHistory);
    }
    if (userHistoryError) {
      console.log('Error fetching user history:', userHistoryError);
    }
  }, [userHistory, isLoading, userHistoryError]);

  return (
    <div className="flex lg:w-1/5 md:w-1/3 w-full flex-col justify-between items-center h-full  bg-zinc-200 min-h-screen px-0 py-6">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl flex flex-row">
          <img src={logo} alt="logo" className="h-9 w-9 mr-1" />
          <span className="font-semibold">9anoun</span>GPT
        </h1>
        <button
          className="w-3/4 cursor-pointer flex justify-start items-center mt-8"
          onClick={newChat}
        >
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-xs bg-zinc-300 hover:bg-zinc-100">
            <PlusIcon /> <p className="text-lg">New Chat</p>
          </div>
        </button>

        <ScrollArea
          scrollAreaThumbClassName="bg-zinc-400"
          className="max-h-[calc(100vh-250px)] w-full mt-6"
        >
          <h2 className="font-semibold mt-6 text-[12px] mx-2 text-left text-zinc-400">
            Previous Chats
          </h2>
          {isLoading ? (
            Array.from({ length: 15 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ConversationSkeleton key={index} />
            ))
          ) : (
            <HistoricChats conversations={conversations} />
          )}
        </ScrollArea>
      </div>
      <button
        className="flex items-center gap-3 cursor-pointer rounded-full bg-white px-4 py-2 w-3/4 hover:bg-zinc-200 hover:ring-1"
        onClick={upgradeToPlus}
      >
        <SparklesIcon className="w-5 h-5" />
        <div className="text-xs w-full">Upgrade to Plus</div>
      </button>
    </div>
  );
}

export default SideBar;
