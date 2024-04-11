import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/app/state/user/userSlice';
import userApiSlice from '@/app/state/user/userApiSlice';
import forumApiSlice from '@/app/state/forum/forumApiSlice';
import forumReducer from '@/app/state/forum/forumSlice';

const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [forumApiSlice.reducerPath]: forumApiSlice.reducer,
    user: userReducer,
    forum: forumReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      userApiSlice.middleware,
      forumApiSlice.middleware,
    ]),
  devTools: true,
});

export default store;
