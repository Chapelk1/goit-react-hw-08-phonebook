export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterValue = state => state.filter;
export const getUser = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshing = state => state.auth.isRefreshing;