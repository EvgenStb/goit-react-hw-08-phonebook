import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);
  const { items } = selectContacts(state);

  let filteredContacts = items;
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return filteredContacts;
};

export const selectSortedContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    
    return (contacts.items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ).sort((a, b) => a.name.localeCompare(b.name)));
  }
);