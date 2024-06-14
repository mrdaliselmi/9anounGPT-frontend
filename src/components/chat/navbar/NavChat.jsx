import { UserButton } from '@clerk/clerk-react';

function NavChat() {
  return (
    <div className="absolute top-4 right-4 flex space-x-2">
      <UserButton
        appearance={{
          elements: {
            avatarBox: 'h-[36px] w-[36px]',
          },
        }}
      />
    </div>
  );
}

export default NavChat;
