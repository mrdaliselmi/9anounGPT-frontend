import {
  IconHelpHexagon,
  IconHome,
  IconTags,
  IconUsers,
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

export default function LeftSideBar() {
  return (
    <div className="flex flex-col w-full h-screen space-y-4 text-left border-r border-gray-400">
      <NavLink
        to="/forum"
        className="flex flex-row w-full p-2 items-center hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:hover:bg-gray-100 active:border-primary/90 active:border-r-2"
      >
        <IconHome size={22} className="mr-2" />
        Home
      </NavLink>
      <NavLink
        to="/forum/questions"
        className="flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:hover:bg-gray-100 active:border-primary/90 active:border-r-2"
      >
        <IconHelpHexagon size={22} className="mr-2" />
        Questions
      </NavLink>
      <NavLink
        to="/forum/users"
        className="flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:hover:bg-gray-100 active:border-primary/90 active:border-r-2"
      >
        <IconUsers size={22} className="mr-2" />
        Users
      </NavLink>
      <NavLink
        to="/forum/tags"
        className="flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:hover:bg-gray-100 active:border-primary/90 active:border-r-2"
      >
        <IconTags size={24} className="mr-2" />
        Tags
      </NavLink>
    </div>
  );
}
