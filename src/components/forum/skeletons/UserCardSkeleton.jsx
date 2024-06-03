import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserCardSkeleton() {
  return (
    <div className="text-start">
      <Card className="w-auto bg-gray-100">
        <CardHeader className="flex items-center justify-center">
          <Skeleton className="h-[40px] w-[40px] rounded-full" />
          <CardTitle className="text-start">
            <Skeleton className="flex h-4 w-16" />
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Skeleton className="flex h-8 w-24" />
        </CardFooter>
      </Card>
    </div>
  );
}
