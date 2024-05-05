import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { QuestionInput } from '@/components/chat/QuestionInput.jsx';

const RightSideBar = () => {
  const [chatHistory, setChatHistory] = useState([]);

  // useEffect(() => {
  //   fetch('http://192.168.1.23:5000/get_history?user_id=1&conversation_id=1', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const parsedData = data.map((item) => JSON.parse(item));
  //       setChatHistory(parsedData);
  //       console.log(parsedData); // Log the parsed data here
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching chat history:', error);
  //     });
  // }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="w-full h-full flex flex-col justify-end align-bottom mb-10">
      <div className="h-5/6">
        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 mx-32">
          {chatHistory.map((message) => (
            <div key={uuidv4()} className="bg-gray-100 p-2 rounded-lg">
              {message.type}
            </div>
          ))}
        </div>
      </div>
      <QuestionInput />
    </div>
  );
};

export default RightSideBar;
