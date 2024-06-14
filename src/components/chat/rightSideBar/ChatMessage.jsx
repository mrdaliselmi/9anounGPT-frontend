import React, { useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { CopyIcon } from '@radix-ui/react-icons';
import { RefreshCcwIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import { useCopyToClipboard } from '@/utils/hooks/useCopyToClipboard.js';
import { MessageRole } from '@/enums/MessageRole.js';
import { useToast } from '@/components/ui/use-toast';
import Typewriter from '@/components/chat/typeWriter/typewriter.jsx';

export const ChatMessage = ({ message, userAvatar }) => {
  const messageRef = useRef(null);
  const [, copy] = useCopyToClipboard();
  const isBot = message.role !== MessageRole.USER;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const { toast } = useToast();

  const feedbackToast = () => {
    toast({
      description: 'Thank you for your feedback!',
      style: { backgroundColor: '#f0f9ff' },
    });
  };

  const copyToast = () => {
    toast({
      description: 'Message copied to clipboard!',
      style: { backgroundColor: '#f4ecbc' },
    });
  };

  function handleLike() {
    setLiked((prev) => !prev);
    setDisliked(false);
    feedbackToast();
  }

  function handleDislike() {
    setDisliked((prev) => !prev);
    setLiked(false);
    feedbackToast();
  }

  function handleRegenerate() {
    // console.log('Regenerate');
  }

  function handleCopy() {
    copy(messageRef?.current?.innerHTML || '');
    copyToast();
  }

  return (
    <div className="flex items-start mt-4 mr-4">
      <Avatar className="mr-4 flex-shrink-0">
        <AvatarImage
          src={isBot ? '/assets/logo.png' : userAvatar || '/assets/user.png'}
          alt="avatar"
          className="h-8 w-8 rounded-full"
        />
        <AvatarFallback className="bg-black rounded-full p-1 h-8 flex items-center justify-center">
          {isBot ? 'B' : 'Y'}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-2" />
        </div>
        <div className="bg-gray-100 rounded-lg p-2 mt-1 w-full">
          <div
            ref={messageRef}
            className="whitespace-pre-wrap break-words text-left leading-tight"
          >
            <Typewriter isUser={!isBot} markdownText={message.message} />
          </div>
        </div>
        <span className="text-xs text-gray-500 ">
          {isBot && (
            <div className="flex gap-2 gap-x-2 mt-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
              >
                <CopyIcon className="hover:text-zinc-900 cursor-pointer" />
              </button>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 ${liked ? 'text-zinc-500' : 'text-gray-500'} hover:text-gray-700`}
              >
                <ThumbsUpIcon
                  className={`w-4 h-4 ${liked ? 'fill-current' : ''}`}
                />
              </button>
              <button
                onClick={handleDislike}
                className={`flex items-center gap-1 ${disliked ? 'text-zinc-500' : 'text-gray-500'} hover:text-gray-700`}
              >
                <ThumbsDownIcon
                  className={`w-4 h-4 ${disliked ? 'fill-current' : ''}`}
                />
              </button>
              <button
                onClick={handleRegenerate}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
              >
                <RefreshCcwIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
