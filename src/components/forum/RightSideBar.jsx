import {
  IconBallpenFilled,
  IconBubbleFilled,
  IconFlame,
  IconGavel,
} from '@tabler/icons-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import WatchedTags from './WatchedTags';

export default function RightSideBar() {
  return (
    <div className="flex flex-col w-full space-y-2 text-left">
      <Card className="shadow-none">
        <CardHeader className="bg-zinc-200 rounded-t-xl flex flex-row space-x-2">
          <IconGavel size={24} />
          <CardTitle>9anounGPT Blog</CardTitle>
        </CardHeader>
        <CardContent className="bg-zinc-50 rounded-b-xl pt-2 pl-2 space-y-2 flex flex-col justify-center">
          <div className="flex flex-row space-x-2 items-center">
            <IconBallpenFilled size={24} />
            <p className="text-sm">The recent legislative changes?</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <IconBallpenFilled size={24} />
            <p className="text-sm">Comparative Legal Analysis?</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <IconBallpenFilled size={24} />
            <p className="text-sm">Legal Education and Training?</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-none">
        <CardHeader className="bg-zinc-200 rounded-t-xl flex flex-row space-x-2">
          <IconFlame size={24} />
          <CardTitle>Hot Posts</CardTitle>
        </CardHeader>
        <CardContent className="bg-zinc-50 rounded-b-xl pt-2 pl-2 space-y-2 flex flex-col">
          <div className="flex flex-row space-x-2 items-center">
            <IconBubbleFilled size={24} />
            <p className="text-sm">Comment avoir un fond de commerce?</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <IconBubbleFilled size={24} />
            <p className="text-sm">comment écrire un contrat de travail?</p>
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <IconBubbleFilled size={24} />
            <p className="text-sm">CNSS vs CNRPS, qui est meilleur?</p>
          </div>
        </CardContent>
      </Card>
      <WatchedTags />
    </div>
  );
}
