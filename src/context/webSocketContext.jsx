import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useUser } from '@clerk/clerk-react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useUser();
  const [isQuerying, setIsQuerying] = useState(false);
  const backendUrl = import.meta.env.VITE_BACK_API_URL;
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const socketInstance = io(backendUrl);
    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      // console.log('Socket connected');
    });

    socketInstance.on('disconnect', () => {
      // console.log('Socket disconnected');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <WebSocketContext.Provider
      value={{
        socket,
        user,
        isQuerying,
        setIsQuerying,
        fetched,
        setFetched,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
