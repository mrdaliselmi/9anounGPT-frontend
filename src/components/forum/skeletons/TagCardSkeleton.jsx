import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function TagCardSkeleton() {
  return (
    <Card className="w-auto bg-gray-100">
      <CardHeader>
        <CardTitle className="text-start">
          <Skeleton className="flex h-5 w-16" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="flex h-4 w-32" />
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex space-x-6">
        <Skeleton className="flex h-4 w-16" />
        <Skeleton className="flex h-8 w-24" />
      </CardFooter>
    </Card>
  );
}
