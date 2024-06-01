import React, { useEffect, useState } from 'react';
import { PlusIcon, SparklesIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HistoricChats from '@/components/chat/sideBar/HistoricChats.jsx';
import { useWebSocket } from '@/context/webSocketContext.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';

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

  const url = `http://192.168.1.14:5000/get_user_history?user_id=${user.id}`;
  const fetchUserHistory = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        setConversations(data);
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchUserHistory();
  }, []);

  return (
    <div className="flex w-64 flex-col justify-between min-h-screen items-center h-full bg-zinc-200 py-6">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl">
          {' '}
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
          scrollAreaThumbClassName="bg-transparent"
          className="max-h-[calc(100vh-250px)] w-full mr-[-10px] mt-6"
        >
          <HistoricChats conversations={conversations} />
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
