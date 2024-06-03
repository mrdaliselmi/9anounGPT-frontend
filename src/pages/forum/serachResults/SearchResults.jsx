import { useGetAllPostsQuery } from '@/app/state/forum/forumApiSlice';
import AskQuestionButton from '../askQuestion/AskQuestionButton';
import QuestionCard from '@/components/forum/QuestionCard';
import QuestionCardSkeleton from '@/components/forum/skeletons/QuestionCardSkeleton';

export default function SearchResults({ searchParam }) {
  const { data, isError, isLoading, isSuccess } = useGetAllPostsQuery({
    search: searchParam,
  });
  return (
    <div className="flex flex-col pr-4 w-full">
      <div className="p-6 text-left flex flex-row">
        <div className="text-2xl flex font-semibold">
          Search Results for {searchParam}
        </div>
        <div className="flex flex-grow" />
        <div className="flex">
          <AskQuestionButton />
        </div>
      </div>
      {isLoading ? (
        Array.from({ length: 16 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <QuestionCardSkeleton key={index} />
        ))
      ) : data[1] ? (
        data[0].map((post) => <QuestionCard key={post.id} question={post} />)
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                No Results Found
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                No results found for your search query. Please try again with a
                different search query.
              </p>
              <a
                href="#"
                className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
