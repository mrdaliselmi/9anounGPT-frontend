import { Link } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';
import logo from '/assets/logo.png';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const style = {
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)',
  };
  return (
    <div
      className="fixed flex flex-row top-0 w-full z-30 px-24 py-2 clearNav md:bg-opacity-90 transition duration-300 ease-in-out border-b"
      style={style}
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
                  to="/forum"
                >
                  Go to Forum
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex flex-grow" />
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
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
