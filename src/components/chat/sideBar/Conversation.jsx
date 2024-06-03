import React from 'react';
import { IconBrandWechat, IconDotsVertical } from '@tabler/icons-react';
import { Trash2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Button } from '@/components/ui/button.jsx';
import { useWebSocket } from '@/context/webSocketContext.jsx';
import { useDeleteConversationMutation } from '@/app/state/conversation/conversationApiSlice.js';

const Conversation = ({ conversation }) => {
  const navigate = useNavigate();
  const { user } = useWebSocket();
  const [
    deleteConversation,
    { isLoading: isDeleting, error: deleteError, isSuccess: deleteSuccess },
  ] = useDeleteConversationMutation();
  const deleteChat = () => {
    setTimeout(() => {
      navigate('/chat');
    }, 0);
    console.log(conversation.conversation_id);
    const data = {
      conversation_id: conversation.conversation_id,
      user_id: user.id,
    };
    deleteConversation(data);
    if (deleteSuccess) {
      // console.log('Chat deleted successfully');
    }
    if (deleteError) {
      // console.log('Error deleting chat:', deleteError);
    }
  };
  const navigateToChat = () => {
    navigate(`/chat/${conversation.conversation_id}`);
  };
  return (
    <button
      className="border rounded  flex flex-row text-start w-full"
      onClick={navigateToChat}
    >
      <div className="flex justify-between items-center overflow-hidden cursor-pointer mx-2 hover:bg-zinc-300 rounded-md w-full">
        <div className="flex flex-row items-center ">
          <IconBrandWechat className="w-5 h-5 mr-2 " />
          <p className="text-[12px] font-semibold flex-1 truncate max-w-52">
            {JSON.parse(conversation.history[0]).data.content.split('\n')[0]}
          </p>
        </div>
        <div className="flex flex-grow" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="p-0">
                    <Button
                      variant="outline p-0"
                      className="focus-visible:ring-0 focus-visible:ring-ring"
                    >
                      <IconDotsVertical className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full cursor-pointer left-1">
                    <button onClick={deleteChat}>
                      <DropdownMenuItem className="w-full text-red-600 flex flex-row justify-start p-2 gap-4 focus:cursor-pointer">
                        <Trash2Icon className="w-5 h-5 cursor-pointer" />
                        Delete Chat
                      </DropdownMenuItem>
                    </button>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Options</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </button>
  );
};

export default Conversation;
