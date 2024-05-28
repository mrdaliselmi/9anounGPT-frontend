import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardDescription, CardHeader } from '@/components/ui/card.jsx';

export function QuestionCard({ questionText, onClickCard }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        onClickCard(questionText);
      }}
      className="w-7/8"
    >
      <Card className="w-full p-0 m-0 hover:bg-zinc-100 ring-1 ring-zinc-300">
        <CardHeader className="p-5">
          <CardDescription className="text-left">
            {questionText}
          </CardDescription>
        </CardHeader>
      </Card>
    </button>
  );
}
