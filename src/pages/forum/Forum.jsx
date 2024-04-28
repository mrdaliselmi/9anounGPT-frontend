import { Outlet } from 'react-router-dom';
import Navbar from '@/components/forum/Navbar';

function Forum() {
  return (
    <div className="pt-[80px]">
      <Navbar className="overflow-hidden fixed top-0 left-0 z-10" />
      <Outlet />
    </div>
  );
}
export default Forum;
