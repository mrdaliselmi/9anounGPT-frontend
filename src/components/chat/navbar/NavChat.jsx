import Header from '../../shared/header.jsx';
import NavigationBar from '@/components/chat/navbar/NavigationBar.jsx';

function NavChat() {
  return (
    <nav className="flex items-center justify-end py-4 px-8 bg-zinc-100 w-full h-20">
      <div className="flex justify-start">
        <NavigationBar />
      </div>
      <div className="flex justify-end flex-grow">
        <Header />
      </div>
    </nav>
  );
}

export default NavChat;
