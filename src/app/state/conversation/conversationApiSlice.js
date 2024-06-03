/* eslint-disable camelcase */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/app/query';

const conversationApiSlice = createApi({
  reducerPath: 'conversationApi',
  baseQuery,
  endpoints: (builder) => ({
    fetchConversationHistory: builder.query({
      query: ({ conversationId, userId }) =>
        `/get_history?conversation_id=${conversationId}&user_id=${userId}`,
      transformResponse: (response) =>
        response.map((message) => {
          message = JSON.parse(message);
          return {
            role: message.type === 'human' ? 'user' : 'assistant',
            message: message.data?.content,
          };
        }),
    }),
    deleteConversation: builder.mutation({
      query: ({ conversation_id, user_id }) => ({
        url: '/delete_history',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { conversation_id, user_id },
      }),
    }),
    fetchUserHistory: builder.query({
      query: ({ userId }) => `/get_user_history?user_id=${userId}`,
    }),
  }),
});

export const {
  useFetchConversationHistoryQuery,
  useDeleteConversationMutation,
  useFetchUserHistoryQuery,
} = conversationApiSlice;

export default conversationApiSlice;
