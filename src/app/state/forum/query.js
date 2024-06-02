import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setToken } from '@/app/state/user/userSlice';

const accessBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_FORUM_BACK_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().user;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
const refreshBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACK_API_URL,
  credentials: 'include',
});

export const baseQuery = async (args, api, extraOptions) => {
  let result = await accessBaseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 && args.url !== '/auth/refresh') {
    const refreshResult = await refreshBaseQuery(
      '/auth/refresh',
      api,
      extraOptions,
    );
    if (refreshResult.data) {
      api.dispatch(setToken(refreshResult.data.data));
      result = await accessBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
