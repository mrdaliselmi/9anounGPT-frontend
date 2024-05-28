import { SendIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';

export function QuestionInput({ disabled, onSubmit, placeholder }) {
  const InputRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const Input = InputRef?.current;
      if (Input && Input.value.trim().length > 0) {
        if (onSubmit) {
          onSubmit(Input.value);
        }
        Input.value = '';
      }
    },
    [onSubmit],
  );
  const handleEnterKey = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSubmit(e);
      }
    },
    [handleSubmit],
  );
  return (
    <div className="fixed bottom-2 left-1/4 right-0 flex items-center justify-center py-8 px-8 ">
      <div className="flex w-5/6 items-center justify-center relative">
        <Input
          ref={InputRef}
          onKeyUp={handleEnterKey}
          disabled={disabled}
          type="text"
          className="h-[48px] ring-1 w-full pr-12 focus-visible:outline-none "
          placeholder={
            placeholder?.length > 0 ? placeholder : 'Type your question here'
          }
        />
        <Button
          className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-black cursor-pointer bg-cyan-100"
          onClick={handleSubmit}
          disabled={disabled}
        >
          <SendIcon className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
