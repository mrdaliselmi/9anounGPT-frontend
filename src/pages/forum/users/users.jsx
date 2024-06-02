import { useGetAllUsersQuery } from '@/app/state/forum/forumApiSlice';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function Users() {
  const { data, isError, isLoading, isSuccess } = useGetAllUsersQuery();
  return (
    <div>
      <div className="p-6 text-left flex flex-row">
        <div className="text-2xl flex font-semibold">Users</div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-2 gap-y-2 px-4 mt-6 w-full">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data &&
          data.data.map((user) => (
            <div key={user.id} className="text-start">
              <Card className="w-auto bg-gray-100">
                <CardHeader className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage src={user.imageUrl} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-start">{user.username}</CardTitle>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button>See posts</Button>
                </CardFooter>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Users;
