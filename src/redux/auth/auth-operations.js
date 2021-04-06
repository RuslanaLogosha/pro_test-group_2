import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://backend-for-pro-test.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// POST @ /users/auth/register

const register = createAsyncThunk(
  'users/auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post('/users/auth/register', user);
      // нет токена при регистрации
      //   token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// POST @ /users/auth/login

const logIn = createAsyncThunk(
  'users/auth/logIn',
  async (user, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post('/users/auth/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// !!! ЗДЕСЬ БУДЕТ GOOGLE !!!
// GET @ /users/auth/login

// const googleAuth = createAsyncThunk(
//   'users/auth/google',
//   async (user, { rejectWithValue }) => {
//     try {
//       const {
//         data: { data },
//       } = await axios.get('/users/auth/google', user);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// POST @ /users/auth/logout

const logOut = createAsyncThunk(
  'users/auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// GET @ /users/current

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const {
        data: { data },
      } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authOperations = {
  register,
  logIn,
  // googleAuth,
  logOut,
  fetchCurrentUser,
};
export default authOperations;
