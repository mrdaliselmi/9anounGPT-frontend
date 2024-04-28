import { IconBallpenFilled, IconTagStarred } from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

export default function WatchedTags({ tags }) {
  tags = [
    'c',
    'c++',
    'css',
    'java',
    'javascript',
    'python',
    'react',
    'vue',
    'angular',
  ];
  return (
    <Card className="shadow-none">
      <CardHeader className="bg-zinc-200 rounded-t-xl flex flex-row space-x-2">
        <IconTagStarred size={24} />
        <CardTitle>Watched Tags</CardTitle>
      </CardHeader>
      <CardContent className="bg-zinc-50 rounded-b-xl pt-2 pl-2 gap-2 flex flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag} className="bg-primary/90 flex cursor-pointer">
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
