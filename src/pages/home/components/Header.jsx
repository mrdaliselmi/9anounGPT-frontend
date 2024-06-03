import React from 'react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';
import { cn } from '@/utils';
import logo from '/assets/logo.png';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const style = {
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)',
  };
  return (
    <div
      className="fixed top-0 w-full z-30 px-24 clearNav md:bg-opacity-90 transition duration-300 ease-in-out"
      style={style}
    >
      <div className="flex flex-col w-full md:items-center md:justify-between md:flex-row items-center justify-center">
        <div className="flex flex-row items-center p-4">
          <a
            href="/"
            className="flex flex-row text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <img src={logo} alt="logo" className="h-9 w-9 mr-1" />
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              9anoun<span className="font-bold">GPT</span>
            </h1>
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
        <div
          className={cn(
            'md:flex flex-grow items-center w-full',
            navbarOpen ? ' flex' : ' hidden',
          )}
        >
          <nav className="flex-col flex-grow w-full">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/chat"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Go to Chat
                </a>
              </li>
              <li>
                <a
                  href="/forum"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Go to Forum
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
