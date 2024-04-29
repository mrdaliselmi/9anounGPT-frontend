import React from 'react';
import SideBar from '@/components/chat/SideBar';
import NavChat from '@/components/chat/NavChat';

function Chat() {
  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="w-full">
        <NavChat />
      </div>
    </div>
  );
}

export default Chat;
