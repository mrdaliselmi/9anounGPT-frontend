import { Skeleton } from '@/components/ui/skeleton';

export function MessageSkeleton() {
  return (
    <div className="ml-40 mt-8 rounded flex flex-row text-start p-2 gap-2 animate-pulse mr-8">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-6 " />
        <Skeleton className="h-6 " />
        <Skeleton className="h-6 " />
      </div>
    </div>
  );
}
