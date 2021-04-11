const getIsLoggedIn = state => state.auth.isLoggedIn;
const getEmail = state => state.auth.user.email;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getIsErrorUnauthorized = state => state.auth.isErrorUnauthorized;

const authSelectors = {
  getIsLoggedIn,
  getEmail,
  getIsFetchingCurrentUser,
  getIsErrorUnauthorized,
};

export default authSelectors;
