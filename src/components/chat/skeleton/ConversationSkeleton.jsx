import { Skeleton } from '@/components/ui/skeleton';

export function ConversationSkeleton() {
  return (
    <div className=" mx-2 border rounded flex flex-row text-start w-full p-2 gap-2 animate-pulse">
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex flex-grow" />
    </div>
  );
}
