import React from 'react';
import logo from '/assets/logo.png';
import { QuestionCard } from '@/components/chat/QuestionCard.jsx';
import { QuestionInput } from '@/components/chat/conversations-ui/QuestionInput.jsx';

function MainBar() {
  return (
    <div className="w-full">
      <div className="h-5/6 flex items-center justify-center flex-col gap-2">
        <img src={logo} alt="logo" className="size-32 opacity-35" />
        <h2 className="text-2xl">How can I help you today?</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 mx-32">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
      <QuestionInput />
    </div>
  );
}

export default MainBar;
