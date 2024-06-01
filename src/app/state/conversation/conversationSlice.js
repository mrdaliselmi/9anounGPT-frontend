import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState: {
    currentConversation: null,
    messages: [],
  },
  reducers: {
    startConversation: (state, action) => {
      state.currentConversation = action.payload.conversation_id;
      state.messages = [
        {
          id: uuidv4(),
          role: 'user',
          message: action.payload.question,
        },
      ];
    },
    addMessage: (state, action) => {
      const { role, message, id } = action.payload;
      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage && lastMessage.role === role) {
        lastMessage.message += message;
      } else {
        state.messages.push({
          id: id || uuidv4(),
          role,
          message,
        });
      }
    },
    deleteConversation: (state) => {
      state.currentConversation = null;
      state.messages = [];
    },
  },
});

export const { startConversation, deleteConversation, addMessage } =
  conversationsSlice.actions;

export default conversationsSlice.reducer;
