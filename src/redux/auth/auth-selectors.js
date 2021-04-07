const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getEmail = (state) => state.auth.user.email;

const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getEmail,
  getIsFetchingCurrentUser,
};

export default authSelectors;
