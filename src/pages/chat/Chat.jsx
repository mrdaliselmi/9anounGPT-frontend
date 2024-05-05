import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '@/components/chat/SideBar';
import NavChat from '@/components/chat/NavChat';

function Chat() {
  return (
    <div className="flex ">
      <SideBar />
      <div className="w-full flex flex-col h-screen">
        <NavChat />
        <Outlet />
      </div>
    </div>
  );
}

export default Chat;
