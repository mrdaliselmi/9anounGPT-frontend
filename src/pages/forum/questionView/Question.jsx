import { useSearchParams } from 'react-router-dom';
import AddComment from '@/components/forum/AddComment';
import AskQuestionButton from '../askQuestion/AskQuestionButton';
import QuestionContent from './QuestionContent';
import {
  useGetCommentsByPostIdQuery,
  useGetPostByIdQuery,
} from '@/app/state/forum/forumApiSlice';
import AnswerContent from './AnswerContent';
import timeAgo from '@/libs/timeAgo';
import AnswerContentSkeleton from '@/components/forum/skeletons/AnswerContentSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Question({ questionId }) {
  if (!questionId) {
    const [searchParams] = useSearchParams();
    questionId = searchParams.get('view');
  }
  const { data, isError, isLoading, isSuccess } = useGetPostByIdQuery(
    parseInt(questionId, 10),
  );
  const {
    data: answers,
    isError: answersError,
    isLoading: answersLoading,
    isSuccess: answersSuccess,
  } = useGetCommentsByPostIdQuery(parseInt(questionId, 10));
  return (
    <div className="mt-3 mx-4">
      <div className="space-y-4">
        {isLoading ? (
          <Skeleton className="h-4 w-64" />
        ) : (
          <div className="text-2xl text-start">{data?.title}</div>
        )}
        <div className="flex flex-row space-x-4 text-sm">
          {isLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            <div className="text-gray-700">
              Asked{' '}
              <span className="font-semibold text-primary">
                {timeAgo(data?.createdAt)}
              </span>
            </div>
          )}
          {isLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            <div className="text-gray-700">
              Modified{' '}
              <span className="font-semibold text-primary">
                {timeAgo(data?.updatedAt)}
              </span>
            </div>
          )}
          {isLoading ? (
            <Skeleton className="h-4 w-12" />
          ) : (
            <div className="text-gray-700">
              Viewed{' '}
              <span className="font-semibold text-primary">
                {data?.views} times
              </span>
            </div>
          )}
          <div className="flex flex-grow" />
          <div className="mt-[-10px]">
            <AskQuestionButton />
          </div>
        </div>
        <hr />
      </div>
      {isLoading ? <AnswerContentSkeleton /> : <QuestionContent data={data} />}
      <div className="pt-6 space-y-4">
        {isLoading ? (
          <Skeleton className="h-4 w-12" />
        ) : (
          <div className="text-lg text-left">
            {answers && answers[0].length > 1
              ? `${answers[0].length} Answers`
              : `${answers && answers[0].length} Answer`}
          </div>
        )}
        <hr />
        {answersLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <AnswerContentSkeleton key={i} />
            ))
          : answers &&
            answers[0].map((answer) => (
              <>
                <AnswerContent key={answer.id} data={answer} />
                <hr />
              </>
            ))}
      </div>
      <div className="text-left pt-6 mb-6">
        <div className="text-lg">Your Answer</div>
        <AddComment postId={questionId} />
      </div>
    </div>
  );
}
