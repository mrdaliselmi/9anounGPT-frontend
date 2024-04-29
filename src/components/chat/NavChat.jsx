import Header from '../shared/header';

function NavChat() {
  return (
    <nav className="flex items-center justify-end py-4 px-8 bg-zinc-100 w-full h-20">
      <div className="flex justify-between">
        <Header />
      </div>
    </nav>
  );
}

export default NavChat;
