import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '@/components/chat/sideBar/SideBar.jsx';
import NavChat from '@/components/chat/navbar/NavChat.jsx';
import { WebSocketProvider } from '@/context/webSocketContext.jsx';

function Chat() {
  return (
    <WebSocketProvider>
      <div className="flex h-screen ">
        <SideBar />
        <div className="w-full flex flex-col h-screen">
          <NavChat />
          <Outlet />
        </div>
      </div>
    </WebSocketProvider>
  );
}

export default Chat;
