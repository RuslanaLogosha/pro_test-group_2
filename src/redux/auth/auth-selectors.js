const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSelectors;
