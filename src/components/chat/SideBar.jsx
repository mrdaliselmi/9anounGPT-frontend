import React from 'react';
import { PlusIcon, SparklesIcon } from 'lucide-react';
import HistoricChats from '@/components/chat/HistoricChats.jsx';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

function SideBar() {
  const conversations = [
    {
      id: 1,
      title: 'How to add a new component in my angular project ?',
      time: '2:30 PM',
    },
    {
      id: 2,
      title: 'adding a middleware in express.js',
      time: '2:35 PM',
    },
    {
      id: 3,
      name: 'James Doe',
      title: 'How to use the new react hooks ?',
      time: '2:40 PM',
    },
    {
      id: 4,
      name: 'John Doe',
      title: 'How to use the new react hooks ?',
      time: '2:40 PM',
    },
    {
      id: 5,
      name: 'James Doe',
      title: 'How to use the new react hooks ?',
      time: '2:40 PM',
    },
    {
      id: 6,
      name: 'John Doe',
      title: 'How to use the new react hooks ?',
      time: '2:40 PM',
    },
  ];
  const { toast } = useToast();
  const newChat = () => {
    // console.log('New Chat');
  };
  const upgradeToPlus = () => {
    // console.log('Upgrade to Plus');
  };
  return (
    <div className="flex lg:w-1/5 md:w-1/3 w-full flex-col justify-between items-center  bg-zinc-200 h-full min-h-screen px-0 py-8">
      <div className="flex flex-col items-center w-full">
        <h1 className=" text-2xl ">
          {' '}
          <span className="font-semibold">9anoun</span>GPT
        </h1>
        <div className="w-3/4 cursor-pointer flex justify-start items-center mt-8 ">
          <div className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-xs bg-zinc-300  hover:bg-zinc-100 ">
            <button
              className="flex flex-row gap-8 text-[16px]"
              onClick={newChat}
            >
              <PlusIcon /> <p className="-mt-[2.5px] text-lg">New Chat</p>
            </button>
          </div>
        </div>
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
