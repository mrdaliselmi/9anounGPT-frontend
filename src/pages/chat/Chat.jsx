import React from 'react';
import { useChatQuery } from '@/app/state/user/userApiSlice.js';

function Chat() {
  const { data, error, isLoading } = useChatQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.data}</h1>
    </div>
  );
}

export default Chat;
