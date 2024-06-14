import { Skeleton } from '@/components/ui/skeleton';

export default function QuestionCardSkeleton() {
  return (
    <div className="flex flex-row w-full border-t p-4 space-x-8 border-gray-400 bg-gray-100">
      <div className="flex flex-col w-1/6 items-end space-y-1">
        <Skeleton className="flex justify-end h-3 w-14" />
        <Skeleton className="flex justify-end h-3 w-14" />
        <Skeleton className="flex justify-end h-3 w-14" />
      </div>
      <div className="flex flex-col w-4/6 space-y-6">
        <div className="flex text-left-justify-left font-semibold text-gray-800">
          <Skeleton className="flex justify-end h-4 w-[250px]" />
        </div>
        <div className="flex flex-wrap justify-left space-x-2">
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-4 w-6" />
        </div>
      </div>
      <div className="flex flex-col w-1/6 justify-center space-y-1">
        <div className="flex text-sm justify-end">
          <Skeleton className="h-4 w-36 ml-1" />
        </div>
        <div className="flex text-sm justify-end">
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}
