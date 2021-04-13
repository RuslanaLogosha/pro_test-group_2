import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import authActions from './auth-actions';

const initialState = {
  user: { email: null },
  token: null,
  refreshToken: null,
  sessionId: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  ErrorUnauthorized: null,

  ErrorRegister: null,
  ErrorLogin: null,
  ErrorGoogle: null,
  ErrorLogout: null,
  ErrorRefresh: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authActions.setGoogleUser](state, action) {
      console.log(action.payload);
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
      state.ErrorRegister = null;
    },
    [authOperations.register.rejected](state, action) {
      state.ErrorRegister = action.payload;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
      state.ErrorLogin = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.ErrorLogin = action.payload;
    },

    [authOperations.googleAuth.fulfilled](state) {
      state.ErrorGoogle = null;
    },
    [authOperations.googleAuth.rejected](state, action) {
      state.ErrorGoogle = action.payload;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state.sessionId = null;
      state.isLoggedIn = false;
      state.ErrorLogout = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.ErrorLogout = action.payload;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.ErrorUnauthorized = action.payload;
    },

    [authOperations.refreshToken.fulfilled](state, action) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.ErrorRefresh = null;
      state.ErrorUnauthorized = null;
    },
    [authOperations.refreshToken.rejected](state, action) {
      state.ErrorRefresh = action.payload;
    },
  },
});

export default authSlice.reducer;
