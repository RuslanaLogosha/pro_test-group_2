import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { email: null },
  token: null,
  refreshToken: null,
  sessionId: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isErrorUnauthorized: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      // state.token = action.payload.token;
      state.token = 'token';
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isLoggedIn = true;
    },
    // !!! ЗДЕСЬ БУДЕТ GOOGLE !!!
    // [authOperations.googleAuth.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    [authOperations.logOut.fulfilled](state) {
      state.user = { email: null };
      state.token = null;
      state.refreshToken = null;
      state.sessionId = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      // console.log('action fulfilled', action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isErrorUnauthorized = action.payload;
      // console.log('action rejected', action);
    },
    [authOperations.refreshToken.fulfilled](state, action) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.sessionId = action.payload.sessionId;
      state.isErrorUnauthorized = null;
    },
  },
});

export default authSlice.reducer;
