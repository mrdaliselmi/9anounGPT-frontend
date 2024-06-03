import React from 'react';
import { Card, CardDescription, CardHeader } from '@/components/ui/card.jsx';

export function QuestionCard({ questionText, icon, onClickCard }) {
  return (
    <button onClick={() => onClickCard(questionText)}>
      <Card className="w-full hover:bg-zinc-100 ring-1 ring-zinc-300">
        <CardHeader className="p-5 flex items-center">
          <div>{icon}</div>
          <CardDescription className="text-left ml-3">
            {questionText}
          </CardDescription>
        </CardHeader>
      </Card>
    </button>
  );
}
