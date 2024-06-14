import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '/assets/logo.png';
import { TypewriterEffect } from '../sections/TypewriterEffectSmooth';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function Main() {
  const heroWords = [
    {
      text: 'Your',
    },
    {
      text: 'AI-Powered',
      className: 'text-blue-500 dark:text-blue-500',
    },
    {
      text: 'Lawyer',
    },
    {
      text: 'Assistant',
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="px-64 flex pt-72 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 items-center text-gray-900 text-wrap">
            <TypewriterEffectSmooth words={heroWords} />
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            Revolutionize Your Legal Experience with AI-Powered Assistance
          </p>
          <div className="flex justify-center space-x-2">
            <NavLink to="/chat">
              <Button className="inline-flex items-center py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900">
                Ask the Chat
              </Button>
            </NavLink>
            <NavLink to="/forum">
              <Button
                variant="secondary"
                className="inline-flex items-center py-3 mt-2 font-medium transition duration-500 ease-in-out transform bg-transparent border rounded-lg"
                href="https://github.com/r1/nine4-2/"
              >
                Go to Forum
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 mr-48 md:pl-10">
          <img className="w-80 ml-32 mt-5 opacity-50" alt="logo" src={logo} />
        </div>
      </div>
      <TypewriterEffect />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            />{' '}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
