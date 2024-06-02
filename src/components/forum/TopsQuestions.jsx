import { useGetAllPostsQuery } from '@/app/state/forum/forumApiSlice';
import QuestionCard from './QuestionCard';

export default function TopsQuestions({ option }) {
  const params = {
    limit: 10,
    page: 1,
  };
  if (option === 'Week') {
    params.sort = 'week';
  }
  if (option === 'Month') {
    params.sort = 'month';
  }
  if (option === 'Hot') {
    params.sort = 'hot';
  }
  if (option === 'Controversial') {
    params.sort = 'controversial';
  }

  const { data, isError, isLoading, isSuccess } = useGetAllPostsQuery(params);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <div className="flex flex-col pr-4 mt-6 w-full">
      {data[0].map((post) => (
        <QuestionCard key={post.id} question={post} />
      ))}
    </div>
  );
}
