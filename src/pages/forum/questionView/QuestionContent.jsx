/* eslint-disable react/no-danger */
import {
  IconArrowBigDown,
  IconArrowBigUp,
  IconArrowBigUpFilled,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/utils';
import {
  useDownvotePostMutation,
  useUpvotePostMutation,
} from '@/app/state/forum/forumApiSlice';
import timeAgo from '@/libs/timeAgo';

export default function QuestionContent({ data }) {
  const [postUpvote, { isSuccess: upvoteSuccess, isError: upvoteError }] =
    useUpvotePostMutation();
  const [postDownvote, { isSuccess: downvoteSuccess, isError: downvoteError }] =
    useDownvotePostMutation();
  const { user } = useUser();
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  useEffect(() => {
    if (user) {
      setUpvote(
        !!data?.votes.find(
          (vote) => vote.type === 'up' && vote.userId === user.id,
        ),
      );
      setDownvote(
        !!data?.votes.find(
          (vote) => vote.type === 'down' && vote.userId === user.id,
        ),
      );
    }
  }, [user]);
  const handleUpvote = () => {
    postUpvote(data.id);
    setUpvote(!upvote);
    setDownvote(false);
  };
  const handleDownvote = () => {
    postDownvote(data.id);
    setDownvote(!downvote);
    setUpvote(false);
  };
  return (
    <div className="flex flex-row pt-6 w-full">
      <div className="flex flex-col space-y-2">
        <Button
          onClick={handleUpvote}
          variant="ghost"
          className="border rounded-[50%] p-1"
        >
          <IconArrowBigUp
            stroke={1}
            size={30}
            className={cn('text-zinc-700', upvote && ' fill-zinc-700')}
          />
        </Button>
        <div className="text-xl font-semibold">{data?.votes.length}</div>
        <Button
          onClick={handleDownvote}
          variant="ghost"
          className="border rounded-[50%] p-1"
        >
          <IconArrowBigDown
            stroke={1}
            size={30}
            className={cn('text-zinc-700', downvote && ' fill-zinc-700')}
          />
        </Button>
      </div>
      <div className="pl-6 space-y-6 w-full">
        <div
          className="w-full text-start"
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
        <div>
          <div className="rounded-b-md gap-2 flex flex-wrap justify-left">
            {data?.tags &&
              data?.tags.map((tag) => (
                <Badge key={tag.id} className="bg-cyan-800 flex cursor-pointer">
                  {tag.name}
                </Badge>
              ))}
          </div>
          <div className="flex flex-row pt-4 justify-between items-center">
            <div>
              <Button className=" text-gray-600" variant="outlined">
                share
              </Button>
              {data?.creatorId === user?.id && (
                <Button className=" text-gray-600" variant="outlined">
                  edit
                </Button>
              )}
            </div>
            <div className="flex text-sm text-zinc-600">
              edited {timeAgo(data?.updatedAt)}
            </div>
            <Button
              variant="outlined"
              className="flex rounded-[8px] py-6 justify-center items-center gap-2"
            >
              <Avatar>
                <AvatarImage src={data?.user.imageUrl} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm">{data?.user.username}</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
