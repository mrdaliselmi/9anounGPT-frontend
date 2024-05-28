import React from 'react';
import { PlusIcon, SparklesIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HistoricChats from '@/components/chat/sideBar/HistoricChats.jsx';

function SideBar() {
  const navigate = useNavigate();
  const conversations = useSelector(
    (state) => state.conversations.conversations,
  );
  const newChat = () => {
    navigate('/chat');
  };
  const upgradeToPlus = () => {
    // console.log('Upgrade to Plus');
  };

  return (
    <div className="flex lg:w-1/5 md:w-1/3 w-full flex-col justify-between items-center h-full  bg-zinc-200 min-h-screen px-0 py-6">
      <div className="flex flex-col items-center w-full">
        <h1 className=" text-2xl ">
          {' '}
          <span className="font-semibold">9anoun</span>GPT
        </h1>
        <button
          className="w-3/4 cursor-pointer flex justify-start items-center mt-8 "
          onClick={newChat}
        >
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-xs bg-zinc-300  hover:bg-zinc-100 ">
            <button className="flex flex-row gap-8 text-[16px]">
              <PlusIcon /> <p className="-mt-[2.5px] text-lg">New Chat</p>
            </button>
          </div>
        </button>
        <HistoricChats conversations={conversations} />
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
