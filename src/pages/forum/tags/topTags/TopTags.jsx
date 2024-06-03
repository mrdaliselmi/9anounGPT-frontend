import { NavLink } from 'react-router-dom';
import { useGetAllTagsQuery } from '@/app/state/forum/forumApiSlice';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TagCardSkeleton from '@/components/forum/skeletons/TagCardSkeleton';

export default function TopTags() {
  const { data, isError, isLoading, isSuccess } = useGetAllTagsQuery();
  return (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 px-4 mt-6 w-full">
      {isLoading
        ? Array.from({ length: 16 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TagCardSkeleton key={index} />
          ))
        : data &&
          data[0].map((tag) => (
            <div key={tag.id} className="text-start">
              <Card className="w-auto bg-gray-100">
                <CardHeader>
                  <CardTitle className="text-start">{tag.name}</CardTitle>
                  <CardDescription>
                    See all questions under this tag.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="text-xs text-gray-500">
                    {tag.posts.length} questions
                  </div>
                  <NavLink to={`/forum/questions?search=[${tag.name}]`}>
                    <Button>questions</Button>
                  </NavLink>
                </CardFooter>
              </Card>
            </div>
          ))}
    </div>
  );
}
