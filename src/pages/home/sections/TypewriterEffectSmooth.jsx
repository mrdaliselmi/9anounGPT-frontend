import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export function TypewriterEffect() {
  const words = [
    {
      text: 'One',
    },
    {
      text: 'Question',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'one',
    },
    {
      text: 'Chat',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'at',
    },
    {
      text: 'a',
    },
    {
      text: 'time',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Meet Your Virtual Legal Expert
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <SignInButton />
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <SignUpButton />
        </button>
      </div>
    </div>
  );
}
