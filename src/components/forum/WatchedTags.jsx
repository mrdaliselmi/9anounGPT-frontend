import { IconTagStarred } from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Tag from './Tag';

export default function WatchedTags({ tags }) {
  tags = [
    {
      name: 'Heritage',
      id: 1,
    },
    {
      name: 'DroitDuTravail',
      id: 2,
    },
    {
      name: 'Vol',
      id: 3,
    },
  ];
  return (
    <Card className="shadow-none rounded-md">
      <CardHeader className="bg-zinc-200 rounded-t-md flex flex-row space-x-2">
        <IconTagStarred size={24} />
        <CardTitle>Watched Tags</CardTitle>
      </CardHeader>
      <CardContent className="bg-zinc-50 rounded-b-md pt-2 pl-2 gap-2 flex flex-wrap justify-center">
        {tags.map((tag) => (
          <Tag name={tag.name} key={tag.id} />
        ))}
      </CardContent>
    </Card>
  );
}
