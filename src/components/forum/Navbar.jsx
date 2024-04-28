import { Link } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/utils';

function Navbar({ className }) {
  return (
    <nav
      className={cn(
        className,
        'border-b border-gray-400 flex-no-wrap flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4',
      )}
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <h1 className="font-bold text-lg">9anounGPT</h1>

        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto pl-2"
          id="navbarSupportedContent1"
          data-twe-collapse-item
        >
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <Button variant="link">
                <Link
                  data-twe-nav-link-ref
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/forum"
                >
                  Home
                </Link>
              </Button>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <Button variant="link">
                <Link
                  data-twe-nav-link-ref
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/forum/questions"
                >
                  Questions
                </Link>
              </Button>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <Button variant="link">
                <Link
                  data-twe-nav-link-ref
                  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  to="/forum/users"
                >
                  Users
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center space-x-2">
          <Input placeholder="Search ..." />
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
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
