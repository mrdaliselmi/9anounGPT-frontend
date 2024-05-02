import Conversation from './Conversation';

function HistoricChats({ conversations }) {
  return (
    <div className="mt-8 w-full">
      <h2 className="font-semibold text-[12px] mx-6 text-left text-zinc-400">
        Yesterday
      </h2>
      <div className="flex flex-col mt-0">
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
