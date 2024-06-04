import React, { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from '/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { QuestionCard } from '@/components/chat/mainBar/QuestionCard.jsx';
import { QuestionInput } from '@/components/chat/rightSideBar/QuestionInput.jsx';
import { questionSamples } from '@/components/chat/data/questionSamples.jsx';
import {
  setCurrentConversation,
  startConversation,
} from '@/app/state/conversation/conversationSlice.js';
import { useWebSocket } from '@/context/webSocketContext.jsx';

function MainBar() {
  const { socket, user, setIsQuerying } = useWebSocket();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (value) => {
      if (!socket || !user) return;
      setIsQuerying(true);
      const uuid = uuidv4();
      dispatch(
        startConversation({
          conversation_id: uuid,
          question: value,
        }),
      );
      dispatch(setCurrentConversation(uuid));
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
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={logo} alt="logo" className="w-32 h-32 opacity-35" />
        <h2 className="text-2xl text-center">How can I help you today?</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {questionSamples.map((question) => (
          <div key={question.id} className="w-72 pt-8 h-40  p-4">
            <QuestionCard
              questionText={question.text}
              onClickCard={handleSubmit}
              icon={question.icon}
            />
          </div>
        ))}
      </div>
      <QuestionInput onSubmit={handleSubmit} />
    </div>
  );
}

export default MainBar;
