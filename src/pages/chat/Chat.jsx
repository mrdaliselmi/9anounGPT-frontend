import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '@/components/chat/sideBar/SideBar.jsx';
import { WebSocketProvider } from '@/context/webSocketContext.jsx';
import NavChat from '@/components/chat/navbar/NavChat.jsx';

function Chat() {
  document.title = 'Chat - 9anounGPT';
  return (
    <WebSocketProvider>
      <div className="flex h-screen ">
        <SideBar />
        <div className="w-full flex flex-col h-screen">
          <NavChat />
          <div className="mt-16">
            <Outlet />
          </div>
        </div>
      </div>
    </WebSocketProvider>
  );
}

export default Chat;
