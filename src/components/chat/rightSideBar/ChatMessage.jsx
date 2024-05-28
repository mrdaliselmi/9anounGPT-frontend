import React, { useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { CopyIcon } from '@radix-ui/react-icons';
import { useCopyToClipboard } from '@/utils/hooks/useCopyToClipboard.js';
import { MessageRole } from '@/enums/MessageRole.js';

export const ChatMessage = ({ message, userAvatar }) => {
  const messageRef = useRef(null);
  const [, copy] = useCopyToClipboard();
  const isBot = message.role !== MessageRole.USER;
  return (
    <div className="flex items-start mt-4">
      <Avatar className="mr-4 flex-shrink-0">
        <AvatarImage
          src={isBot ? '/assets/logo.png' : userAvatar || '/assets/user.png'}
          alt="avatar"
          className="h-10 rounded-full"
        />
        <AvatarFallback className="bg-black rounded-full p-1 h-8 flex items-center justify-center">
          {isBot ? 'B' : 'Y'}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold select-none mr-2">
            {isBot ? '9anounGPT' : 'You'}
          </h4>
          <div className="flex flex-row gap-2">
            <span className="text-xs text-gray-500">
              {new Date().toLocaleTimeString()}
            </span>
            <span className="text-xs text-gray-500">
              {isBot && (
                <div className="mt-0 flex justify-end">
                  <CopyIcon
                    className="hover:text-zinc-900 cursor-pointer"
                    onClick={() => copy(messageRef?.current?.innerHTML || '')}
                  />
                </div>
              )}
            </span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-2 mt-1 w-full">
          <div
            ref={messageRef}
            className="whitespace-pre-wrap break-words text-left"
          >
            {message.message}
          </div>
        </div>
      </div>
    </div>
  );
};
