import React from 'react';
import { IconBrandWechat, IconDotsVertical } from '@tabler/icons-react';
import { Trash2Icon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { Button } from '@/components/ui/button.jsx';
import { deleteConversation } from '@/app/state/conversation/conversationSlice.js';

const Conversation = ({ conversation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteChat = () => {
    setTimeout(() => {
      // don't touch it, it's a hack!!it's Art :D
      navigate('/chat');
    }, 100);
    dispatch(deleteConversation(conversation.id));
  };
  const navigateToChat = () => {
    navigate(`/chat/${conversation.id}`);
  };
  return (
    <button
      className="border rounded w-full px-4 cursor-pointer hover:bg-zinc-300 relative"
      onClick={navigateToChat}
    >
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
            <DropdownMenuContent className="w-full cursor-pointer m-0 ">
              <button onClick={deleteChat}>
                <DropdownMenuItem className="w-full text-red-600 flex flex-row justify-start p-2 gap-4 focus:cursor-pointer ">
                  <Trash2Icon className="w-5 h-5 cursor-pointer" />
                  Delete Chat
                </DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </button>
  );
};

export default Conversation;
