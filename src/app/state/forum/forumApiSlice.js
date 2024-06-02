import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/state/forum/query';

const forumApiSlice = createApi({
  reducerPath: 'forumApi',
  baseQuery,
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
    }),
    postComment: builder.mutation({
      query: ({ id, body }) => ({
        url: `/answers/${id}`,
        method: 'POST',
        body,
        credentials: 'include',
      }),
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
} = forumApiSlice;

export default forumApiSlice;
