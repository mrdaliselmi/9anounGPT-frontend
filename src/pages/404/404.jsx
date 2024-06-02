import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              No Results Found
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              No results found for your search query. Please try again with a
              different search query.
            </p>
          </div>
        </div>
      </section>
      <NavLink to="/">
        <Button>Go to Home</Button>
      </NavLink>
    </div>
  );
}

export default NotFound;
