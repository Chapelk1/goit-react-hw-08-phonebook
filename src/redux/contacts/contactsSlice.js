import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operations';

function handlerPending(state) {
  state.isLoading = true;
}
function handlerRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlerPending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: handlerRejected,

    [addContact.pending]: handlerPending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
      state.error = null;
    },
    [addContact.rejected]: handlerRejected,

    [deleteContact.pending]: handlerPending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.error = null;
    },
    [deleteContact.rejected]: handlerRejected,

    [editContact.pending]: handlerPending,
    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
      state.error = null;
    },
    [editContact.rejected]: handlerRejected,
  },
});
