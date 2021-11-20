import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.phoneBook.filterReducer;

export const getFiltredContacts = createSelector(
  [getContacts, getFilter],
  (contactItems, filter) =>
    contactItems.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
