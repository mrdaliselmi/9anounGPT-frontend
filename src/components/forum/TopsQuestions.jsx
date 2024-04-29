import QuestionCard from './QuestionCard';

export default function TopsQuestions({ option }) {
  return (
    <div className="flex flex-col pr-4 mt-6 w-full">
      <div>TopsQuestions {option}</div>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </div>
  );
}
