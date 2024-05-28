import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  conversations: [],
  currentConversation: null,
};

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    startConversation: (state, action) => {
      const newConversation = {
        id: action.payload.conversationID,
        question: action.payload.question,
        title: action.payload.question,
        messages: [
          {
            id: uuidv4(),
            role: 'user',
            message: action.payload.question,
          },
          {
            id: uuidv4(),
            role: 'assistant',
            message: 'This is a response!',
          },
        ],
      };
      state.conversations.push(newConversation);
      state.currentConversation = newConversation.id;
    },
    addMessage: (state, action) => {
      const { conversationId, role, message } = action.payload;
      const conversation = state.conversations.find(
        (conv) => conv.id === conversationId,
      );
      if (conversation) {
        conversation.messages.push({
          id: uuidv4(),
          role,
          message,
        });
      }
    },
    deleteConversation: (state, action) => {
      state.conversations = state.conversations.filter(
        (conv) => conv.id !== action.payload,
      );
    },
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload;
    },
  },
});

export const {
  startConversation,
  deleteConversation,
  addMessage,
  setCurrentConversation,
} = conversationsSlice.actions;

export default conversationsSlice.reducer;
