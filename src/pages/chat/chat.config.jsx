import Chat from './Chat';
import RightSideBar from '@/components/chat/rightSideBar/RightSideBar.jsx';
import MainBar from '@/components/chat/mainBar/MainBar.jsx';

export default {
  path: 'chat/',
  element: <Chat />,
  children: [
    {
      path: ':uuid',
      element: <RightSideBar />,
    },
    {
      path: '',
      element: <MainBar />,
    },
  ],
};
