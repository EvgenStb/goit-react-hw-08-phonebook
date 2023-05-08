export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;

export const selectAuth = state => {
  const isLoggedIn = selectIsLoggedIn(state);
  const isRefreshing = selectIsRefreshing(state);
  const user = selectUser(state);
  const error = selectError(state);
  const isLoading = selectIsLoading(state);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
    isLoading,
  };
};
