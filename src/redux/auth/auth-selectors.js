const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmail = state => state.auth.user.email;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getErrorUnauthorized = state => state.auth.ErrorUnauthorized;

const authSelectors = {
  getIsLoggedIn,
  getEmail,
  getIsFetchingCurrentUser,
  getErrorUnauthorized,
};

export default authSelectors;
