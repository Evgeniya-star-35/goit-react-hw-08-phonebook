import { createReducer, createSlice } from '@reduxjs/toolkit';
import { changeFilter } from '../Phonebook/phonebook-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebook-operations';

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contactItems: [], loading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      contactItems: payload,
      loading: false,
      error: null,
    }),
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contactItems: [...state.contactItems, payload],
      loading: false,
      error: null,
    }),
    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contactItems: state.contactItems.filter(({ id }) => id !== payload),
      loading: false,
      error: null,
    }),
    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export default contactsSlice.reducer;
