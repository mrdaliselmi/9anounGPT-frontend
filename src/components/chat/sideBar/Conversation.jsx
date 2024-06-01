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
import { useWebSocket } from '@/context/webSocketContext.jsx';

const Conversation = ({ conversation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useWebSocket();
  // console.log('conversation', conversation);
  const deleteChat = () => {
    setTimeout(() => {
      // don't touch it, it's a hack!!it's Art :D
      navigate('/chat');
    }, 0);
    const url = 'http://192.168.1.14:5000/delete_history';
    const data = {
      conversation_id: conversation.conversation_id,
      user_id: user.id,
    };
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        // console.log('Chat deleted successfully');
      } else {
        // console.error('Chat deletion failed');
      }
    });
  };
  const navigateToChat = () => {
    navigate(`/chat/${conversation.conversation_id}`);
  };
  return (
    <button
      className="border rounded cursor-pointer hover:bg-zinc-300 flex flex-row text-start"
      onClick={navigateToChat}
    >
      <div className="flex justify-between items-center py-0 px-1">
        <div className="flex flex-row items-center overflow-hidden">
          <IconBrandWechat className="w-5 h-5 mr-2" />
          <p className="text-[12px] font-semibold flex-1 truncate">
            {JSON.parse(conversation.history[0]).data.content.split('\n')[0]}
          </p>
        </div>
        <div className="flex flex-grow" />
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
            <DropdownMenuContent className="w-full cursor-pointer m-0">
              <button onClick={deleteChat}>
                <DropdownMenuItem className="w-full text-red-600 flex flex-row justify-start p-2 gap-4 focus:cursor-pointer">
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
