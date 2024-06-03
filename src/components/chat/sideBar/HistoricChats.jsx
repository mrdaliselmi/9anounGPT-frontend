import Conversation from './Conversation.jsx';

function HistoricChats({ conversations }) {
  return (
    <div className="w-full">
      <div className="flex flex-col mx-2">
        {conversations.map((conversation) => (
          <div key={conversation.id}>
            <Conversation conversation={conversation} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoricChats;
