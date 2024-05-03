import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function QuestionCard() {
  const onQuestionClick = () => {
    console.log('Question Clicked');
  };
  return (
    <button onClick={onQuestionClick} className="w-7/8">
      <Card className="w-full p-0 m-0 hover:bg-zinc-100 ring-1 ring-zinc-300">
        <CardHeader className="p-5">
          <CardTitle className="text-left">Question Sample</CardTitle>
          <CardDescription className="text-left">
            Question text sample....
          </CardDescription>
        </CardHeader>
      </Card>
    </button>
  );
}
