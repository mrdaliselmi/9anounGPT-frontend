import React from 'react';
import { IconBrandWechat, IconDotsVertical } from '@tabler/icons-react';
import { Trash2Icon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button.jsx';

const Conversation = ({ conversation }) => {
  const deleteChat = () => {
    // console.log('Chat deleted');
  };
  return (
    <div className="border rounded w-7/8 px-2 py-1 mr-1 ml-4 cursor-pointer hover:bg-zinc-300 relative">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center overflow-hidden">
          <IconBrandWechat className="w-5 h-5 mr-2" />
          <p className="text-[12px] font-semibold flex-1 truncate">
            {conversation.title}
          </p>
        </div>
        <div className="ml-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="p-0">
              <Button
                variant="outline p-0"
                className="focus-visible:ring-0 focus-visible:ring-ring"
              >
                <IconDotsVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 cursor-pointer p-0">
              <button onClick={deleteChat}>
                <DropdownMenuItem className="text-red-600 flex flex-row justify-start p-2 gap-4">
                  <Trash2Icon className="w-5 h-5 cursor-pointer" />
                  Delete Chat
                </DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
