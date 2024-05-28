/* eslint-disable react/no-danger */
import { IconArrowBigDown, IconArrowBigUp } from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function QuestionContent({ tags, content }) {
  return (
    <div className="flex flex-row pt-6">
      <div className="flex flex-col space-y-2">
        <Button variant="ghost" className="border rounded-[50%] p-1">
          <IconArrowBigUp size={30} className="text-zinc-700" />
        </Button>
        <div className="text-xl font-semibold">8</div>
        <Button variant="ghost" className="border rounded-[50%] p-1">
          <IconArrowBigDown size={30} className="text-zinc-700" />
        </Button>
      </div>
      <div className="pl-6 space-y-6">
        <div
          className="w-full text-start"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div>
          <div className="rounded-b-md gap-2 flex flex-wrap justify-left">
            {tags &&
              tags.map((tag) => (
                <Badge key={tag} className="bg-cyan-800 flex cursor-pointer">
                  {tag}
                </Badge>
              ))}
          </div>
          <div className="flex flex-row pt-4 justify-between items-center">
            <div>
              <Button className=" text-gray-600" variant="outlined">
                share
              </Button>
              <Button className=" text-gray-600" variant="outlined">
                edit
              </Button>
              <Button className=" text-gray-600" variant="outlined">
                follow
              </Button>
            </div>
            <div className="flex text-sm text-zinc-600">edited 15 mins ago</div>
            <Button
              variant="secondary"
              className="flex rounded-[8px] py-6 justify-center items-center gap-2"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm">Pedro de la Cruz</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
