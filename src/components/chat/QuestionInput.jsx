import { SendIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function QuestionInput() {
  let { conversationID } = useParams();
  const navigate = useNavigate();

  const onSend = () => {
    if (!conversationID) {
      conversationID = uuidv4();
    }
    navigate(`/chat/${conversationID}`);
  };
  return (
    <div className="pt-8 flex items-center justify-center ">
      <div className="flex w-5/6 items-center justify-center relative">
        <Input
          type="text"
          className="h-[48px] ring-1 w-full pr-12 focus-visible:outline-none "
          placeholder="Message 9anounGPT..."
        />
        <Button
          className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-black cursor-pointer bg-cyan-100"
          onClick={onSend}
        >
          <SendIcon className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
