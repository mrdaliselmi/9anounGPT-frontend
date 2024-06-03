import { Skeleton } from '@/components/ui/skeleton';

export default function AnswerContentSkeleton() {
  return (
    <div className="flex flex-row pt-6 w-full">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <Skeleton className="rounded-full h-8 w-8" />
        <Skeleton className="rounded-full h-4 w-4" />
        <Skeleton className="rounded-full h-8 w-8" />
      </div>
      <div className="pl-6 space-y-6 w-full">
        <div className="w-full text-start space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div>
          <div className="rounded-b-md gap-2 flex flex-wrap justify-left">
            {Array.from({ length: 3 }).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Skeleton key={i} className="h-4 w-12" />
            ))}
          </div>
          <div className="flex flex-row pt-4 justify-between items-center">
            <div className="flex flex-row space-x-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex text-sm text-zinc-600">
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
