/* eslint-disable camelcase */
/* eslint-disable no-unsafe-optional-chaining */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    currentConversation: null,
    conversations: [],
  },
  reducers: {
    startConversation: (state, action) => {
      const newConversation = {
        id: action.payload.conversation_id,
        messages: [
          {
            id: uuidv4(),
            role: 'user',
            message: action.payload.question,
          },
        ],
      };
      state.currentConversation = action.payload.conversation_id;
      state.conversations.push(newConversation);
    },
    initializeConversation: (state, action) => {
      const { conversation_id, messages } = action.payload;
      const conversation = state.conversations.find(
        (c) => c.id === conversation_id,
      );
      if (conversation) {
        conversation.messages = messages;
      } else {
        state.conversations.push({
          id: conversation_id,
          messages,
        });
      }
    },
    setCurrentConversation: (state, action) => {
      state.currentConversationId = action.payload;
    },
    addMessage: (state, action) => {
      const { conversationId, role, message } = action.payload;
      const conversation = state.conversations.find(
        (c) => c.id === conversationId,
      );
      if (conversation) {
        const lastMessage =
          conversation.messages[conversation.messages?.length - 1];
        if (lastMessage && lastMessage.role === role) {
          lastMessage.message += message;
        } else {
          conversation.messages.push({
            id: uuidv4(),
            role,
            message,
          });
        }
      }
    },
    setUserHistory: (state, action) => {
      state.conversations = action.payload;
    },
    deleteConversationFromHistory: (state, action) => {
      state.conversations = state.conversations.filter(
        (c) => c.id !== action.payload.conversationId,
      );
    },
  },
});

export const {
  startConversation,
  addMessage,
  initializeConversation,
  setCurrentConversation,
  setUserHistory,
  deleteConversationFromHistory,
} = conversationsSlice.actions;

export default conversationsSlice.reducer;
