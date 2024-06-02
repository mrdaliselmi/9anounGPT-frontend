import { Link, NavLink } from 'react-router-dom';
import { Badge } from '../ui/badge';
import timeAgo from '@/libs/timeAgo';
import Tag from './Tag';

export default function QuestionCard({ question }) {
  const { title, tags, views, votes, answers } = question;
  const voteCount = votes
    .map((vote) => (vote.type === 'up' ? 1 : -1))
    .reduce((acc, value) => acc + value, 0);
  return (
    <div className="flex flex-row w-full border-t p-4 space-x-8 border-gray-400 bg-gray-100">
      <div className="flex flex-col w-1/6">
        <div className="flex justify-end text-sm">{voteCount} votes</div>
        <div className="flex justify-end text-sm">{answers.length} answers</div>
        <div className="flex justify-end text-sm">{views} views</div>
      </div>
      <div className="flex flex-col w-4/6 space-y-2">
        <div className="flex text-left justify-left font-semibold text-gray-800">
          <NavLink to={`/forum/questions?view=${question?.id}`}>
            {title}
          </NavLink>
        </div>
        <div className="flex flex-wrap justify-left space-x-2">
          {tags?.map((tag) => (
            <Tag name={tag.name} key={tag.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/6 justify-center">
        <div className="flex text-sm justify-end">
          Asked by
          <Link className="font-semibold ml-1">{question?.user.username}</Link>
        </div>
        <div className="flex text-sm justify-end">
          {timeAgo(question?.createdAt)}
        </div>
      </div>
    </div>
  );
}
