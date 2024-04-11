import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/query';

const forumApiSlice = createApi({
  reducerPath: 'forumApi',
  baseQuery,
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (body) => ({
    //     url: '/auth/login',
    //     method: 'POST',
    //     body,
    //     credentials: 'include',
    //   }),
    // }),
    // register: builder.mutation({
    //   query: (body) => ({
    //     url: '/auth/register',
    //     method: 'POST',
    //     body,
    //   }),
    // }),
    // logout: builder.mutation({
    //   query: () => ({
    //     url: '/auth/logout',
    //     method: 'GET',
    //     credentials: 'include',
    //   }),
    // }),
    // refresh: builder.mutation({
    //   query: () => ({
    //     url: '/auth/refresh',
    //     method: 'GET',
    //     credentials: 'include',
    //   }),
    // }),
  }),
});

// export const {
//   useLoginMutation,
//   useLogoutMutation,
//   forumegisterMutation,
//   forumefreshMutation,
// } = forumApiSlice;

export default forumApiSlice;
