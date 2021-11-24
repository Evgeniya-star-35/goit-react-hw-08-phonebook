import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.contactItems;
export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contactItems, filter) =>
    contactItems.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
