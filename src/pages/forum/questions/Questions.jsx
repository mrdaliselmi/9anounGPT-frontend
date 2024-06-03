import { useSearchParams } from 'react-router-dom';
import Question from '../questionView/Question';
import { useGetAllPostsQuery } from '@/app/state/forum/forumApiSlice';
import QuestionCard from '@/components/forum/QuestionCard';
import AskQuestionButton from '../askQuestion/AskQuestionButton';
import SearchResults from '../serachResults/SearchResults';
import QuestionCardSkeleton from '@/components/forum/skeletons/QuestionCardSkeleton';

function Questions() {
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('view');
  const search = searchParams.get('search');
  const { data, isError, isLoading, isSuccess } = useGetAllPostsQuery();
  if (questionId != null) {
    return (
      <div>
        <Question questionId={questionId} />
      </div>
    );
  }
  if (search != null) {
    return (
      <div>
        <SearchResults searchParam={search} />
      </div>
    );
  }
  return (
    <div className="flex flex-col pr-4 w-full">
      <div className="p-6 text-left flex flex-row">
        <div className="text-2xl flex font-semibold">All Questions</div>
        <div className="flex flex-grow" />
        <div className="flex">
          <AskQuestionButton />
        </div>
      </div>
      {isLoading ? (
        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <QuestionCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        data[0].map((post) => <QuestionCard key={post.id} question={post} />)
      )}
    </div>
  );
}
export default Questions;
