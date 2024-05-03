import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';

export default function QuestionCard() {
  const tags = ['react', 'javascript', 'typescript', 'web-development', 'css'];
  return (
    <div className="flex flex-row w-full border-t p-4 space-x-8 border-gray-400">
      <div className="flex flex-col w-1/6">
        <div className="flex justify-end text-sm">0 votes</div>
        <div className="flex justify-end text-sm">2 answers</div>
        <div className="flex justify-end text-sm">3 views</div>
      </div>
      <div className="flex flex-col w-4/6 space-y-2">
        <div className="flex text-left-justify-left font-semibold text-gray-800">
          <Link to="/forum/question/id">Question Title wtf ?</Link>
        </div>
        <div className="flex flex-wrap justify-left space-x-2">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-cyan-800  flex cursor-pointer mb-2">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/6 justify-center">
        <div className="flex text-sm justify-end">
          by<Link className="font-semibold ml-1">Pedro Duarte</Link>
        </div>
        <div className="flex text-sm justify-end">asked 1 hour ago</div>
      </div>
    </div>
  );
}
