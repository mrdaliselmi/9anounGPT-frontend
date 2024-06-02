import { useGetAllPostsQuery } from '@/app/state/forum/forumApiSlice';
import QuestionCard from './QuestionCard';
import QuestionCardSkeleton from './skeletons/QuestionCardSkeleton';

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
  if (isError) return <div>Error...</div>;
  return (
    <div className="flex flex-col pr-4 mt-6 w-full">
      {isLoading ? (
        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <QuestionCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {data[0].map((post) => (
            <QuestionCard key={post.id} question={post} />
          ))}
        </div>
      )}
    </div>
  );
}
