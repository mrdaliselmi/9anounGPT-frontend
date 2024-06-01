import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { QuestionCard } from '@/components/chat/mainBar/QuestionCard.jsx';
import { QuestionInput } from '@/components/chat/rightSideBar/QuestionInput.jsx';
import { questionSamples } from '@/components/chat/data/questionSamples.js';
import { startConversation } from '@/app/state/conversation/conversationSlice.js';
import { useWebSocket } from '@/context/webSocketContext.jsx';

function MainBar() {
  const { socket, user } = useWebSocket();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isQuerying, setIsQuerying] = useState(false);

  const handleSubmit = useCallback(
    (value) => {
      if (!socket) return;
      // console.log('Sending request from MainBar');
      setIsQuerying(true);
      const uuid = uuidv4();
      dispatch(
        startConversation({
          conversation_id: uuid,
          question: value,
        }),
      );
      socket.emit('question', {
        conversation_id: uuid,
        question: value,
        user_id: user.id,
      });
      navigate(`/chat/${uuid}`);
    },
    [dispatch, user.id, socket],
  );

  return (
    <div className="w-full">
      <div className="h-5/6 flex items-center justify-center flex-col gap-2">
        <img src={logo} alt="logo" className="size-32 opacity-35" />
        <h2 className="text-2xl">How can I help you today?</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-6 mx-32">
        {questionSamples.map((question) => (
          <QuestionCard
            key={question.id}
            questionText={question.text}
            onClickCard={handleSubmit}
          />
        ))}
      </div>
      <QuestionInput onSubmit={handleSubmit} />
    </div>
  );
}

export default MainBar;
