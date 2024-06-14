import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/state/forum/query';

const forumApiSlice = createApi({
  reducerPath: 'forumApi',
  baseQuery,
  tagTypes: ['forum'],
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (body) => ({
        url: '/posts/',
        method: 'POST',
        body,
        credentials: 'include',
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body,
        credentials: 'include',
      }),
    }),
    upvotePost: builder.mutation({
      query: (id) => ({
        url: `/posts/upvote/${id}`,
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
    downvotePost: builder.mutation({
      query: (id) => ({
        url: `/posts/downvote/${id}`,
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
    getAllPosts: builder.query({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params,
      }),
    }),
    getPostById: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET',
      }),
    }),
    getCommentsByPostId: builder.query({
      query: (id) => ({
        url: `/answers/post/${id}`,
        method: 'GET',
      }),
      providesTags: ['forum'],
    }),
    postComment: builder.mutation({
      query: ({ id, body }) => ({
        url: `/answers/${id}`,
        method: 'POST',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['forum'],
    }),
    upvoteAnswer: builder.mutation({
      query: (id) => ({
        url: `/answers/upvote/${id}`,
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
    downvoteAnswer: builder.mutation({
      query: (id) => ({
        url: `/answers/downvote/${id}`,
        method: 'PATCH',
        credentials: 'include',
      }),
    }),
    getAllTags: builder.query({
      query: () => ({
        url: `/tags/`,
        method: 'GET',
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `/clerk/`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useUpvotePostMutation,
  useDownvotePostMutation,
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  usePostCommentMutation,
  useUpvoteAnswerMutation,
  useDownvoteAnswerMutation,
  useGetCommentsByPostIdQuery,
  useGetAllTagsQuery,
  useGetAllUsersQuery,
} = forumApiSlice;

export default forumApiSlice;
