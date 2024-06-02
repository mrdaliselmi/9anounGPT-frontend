import { useSearchParams } from 'react-router-dom';
import Question from '../questionView/Question';
import { useGetAllPostsQuery } from '@/app/state/forum/forumApiSlice';
import QuestionCard from '@/components/forum/QuestionCard';

function Questions() {
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('view');
  const { data, isError, isLoading, isSuccess } = useGetAllPostsQuery();
  if (questionId != null) {
    return (
      <div>
        <Question questionId={questionId} />
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col pr-4 mt-6 w-full">
      {data[0].map((post) => (
        <QuestionCard key={post.id} question={post} />
      ))}
    </div>
  );
}
export default Questions;
