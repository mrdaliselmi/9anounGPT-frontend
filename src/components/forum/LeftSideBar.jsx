import {
  IconHelpHexagon,
  IconHome,
  IconTags,
  IconUsers,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/utils/utils';

export default function LeftSideBar() {
  const { pathname } = useLocation();
  const sidebarNavItems = [
    {
      title: 'Home',
      href: '/forum/home',
    },
    {
      title: 'Questions',
      href: '/forum/questions',
    },
    {
      title: 'Users',
      href: '/forum/users',
    },
    {
      title: 'Tags',
      href: '/forum/tags',
    },
  ];
  const selectedComponent = sidebarNavItems.filter(
    (el) => el.href === pathname,
  );
  const navigate = useNavigate();
  useEffect(() => {
    !selectedComponent.length && navigate('/forum/home');
  }, [selectedComponent.length]);
  const title = selectedComponent.length && selectedComponent[0].title;
  return (
    <div className="flex flex-col w-full min-h-screen h-full space-y-4 text-left border-r border-gray-400 pt-2">
      <NavLink
        to="/forum/home"
        className={cn(
          'flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:bg-gray-100 active:border-primary/90 active:border-r-2',
          title === 'Home' && 'bg-gray-200 border-r-2 border-primary/90',
        )}
      >
        <IconHome size={22} className="mr-2" />
        Home
      </NavLink>
      <NavLink
        to="/forum/questions"
        className={cn(
          'flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:bg-gray-100 active:border-primary/90 active:border-r-2',
          title === 'Questions' && 'bg-gray-200 border-r-2 border-primary/90',
        )}
      >
        <IconHelpHexagon size={22} className="mr-2" />
        Questions
      </NavLink>
      <NavLink
        to="/forum/users"
        className={cn(
          'flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:bg-gray-100 active:border-primary/90 active:border-r-2',
          title === 'Users' && 'bg-gray-200 border-r-2 border-primary/90',
        )}
      >
        <IconUsers size={22} className="mr-2" />
        Users
      </NavLink>
      <NavLink
        to="/forum/tags"
        className={cn(
          'flex flex-row w-full p-2 hover:bg-gray-200 hover:border-r-2 hover:border-primary/90 active:bg-gray-100 active:border-primary/90 active:border-r-2',
          title === 'Tags' && 'bg-gray-200 border-r-2 border-primary/90',
        )}
      >
        <IconTags size={24} className="mr-2" />
        Tags
      </NavLink>
    </div>
  );
}
