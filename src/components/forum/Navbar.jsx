import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconBell } from '@tabler/icons-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';
import logo from '/assets/logo.png';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/utils';

function Navbar({ className }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const handleSearchChange = (e) => setSearchInput(e.target.value);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (searchInput !== '') {
        navigate(`/forum/questions?search=${searchInput}`);
      }
    }
  };
  return (
    <nav
      className={cn(
        className,
        'border-b border-black flex-no-wrap flex flex-row w-full items-center bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4',
      )}
    >
      <div className="flex w-full flex-wrap flex-row items-center px-3 space-x-3">
        <img src={logo} alt="logo" className="h-9 w-9 mr-1" />
        <h1 className="font-bold text-lg">9anounGPT</h1>
        <div
          className="!visible hidden basis-[100%] items-center lg:!flex lg:basis-auto pl-2"
          id="navbarSupportedContent1"
          data-twe-collapse-item
        >
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <Button
                variant="secondary"
                className="bg-transparent border-none shadow-none hover:bg-gray-100"
              >
                <Link
                  data-twe-nav-link-ref
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/chat"
                >
                  Go to Chat
                </Link>
              </Button>
            </li>
            <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <Button
                variant="secondary"
                className="bg-transparent border-none shadow-none hover:bg-gray-100"
              >
                <Link
                  data-twe-nav-link-ref
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/forum/questions"
                >
                  Book a meeting
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex flex-grow">
          <Input
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="w-full"
            placeholder="Search ..."
            value={searchInput}
          />
        </div>
        <div className="relative flex items-center space-x-2">
          <SignedOut>
            <Button>
              <SignInButton />
            </Button>
            <Button variant="outline">
              <SignUpButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Button
              variant="secondary"
              className="bg-transparent border-none shadow-none hover:bg-gray-100"
            >
              <IconBell size={24} stroke={1.5} />
            </Button>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
