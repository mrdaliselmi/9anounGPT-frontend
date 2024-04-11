import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forum: {},
  token: null,
};
export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    // setCredentials: (state, action) => {
    //   state.token = action.payload.access_token;
    //   state.forum = action.payload.forum;
    // },
    // logOut: (state) => {
    //   state.forum = {};
    //   state.token = null;
    // },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    // setforum: (state, action) => {
    //   state.forum = action.payload;
    // },
  },
});

// export const { setCredentials, logOut, setToken, setforum } = forumSlice.actions;

// export const selectforum = (state) => state.forum.forum;

// export const selectToken = (state) => state.forum.token;

export default forumSlice.reducer;
