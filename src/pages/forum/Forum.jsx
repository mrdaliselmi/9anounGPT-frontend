import { Outlet } from 'react-router-dom';
import Navbar from '@/components/forum/Navbar';
import LeftSideBar from '@/components/forum/LeftSideBar';
import RightSideBar from '@/components/forum/RightSideBar';

function Forum() {
  document.title = 'Forum - 9anounGPT';
  return (
    <div className="mt-[68px]">
      <Navbar className="overflow-hidden fixed top-0 left-0 z-10" />
      <div className="flex flex-row">
        <div className="bg-zinc-50 w-[140px]">
          <LeftSideBar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
        <div className="mx-2 mt-3 w-[400px] pr-6">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
export default Forum;
