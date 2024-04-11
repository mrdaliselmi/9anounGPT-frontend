import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.access_token;
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.user = {};
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials, logOut, setToken, setUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;

export default userSlice.reducer;
