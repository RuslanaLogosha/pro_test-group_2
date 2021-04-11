import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      // const {
      //   data: { data },
      // } = await axios.post('/users/auth/register', user);
      const response = await axios.post('/users/auth/register', user);
      const data = response.data.data;
      token.set(data.token);
      toast.success('✔️ Congratulations, you have successfully registered');
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
      // const {
      //   data: { data },
      // } = await axios.post('/users/auth/login', user);
      const response = await axios.post('/users/auth/login', user);
      const data = response.data.data;
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
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      // const {
      //   data: { data },
      // } = await axios.get('/users/current');
      const response = await axios.get('/users/current');

      const dataUser = response.data.data;
      return dataUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

// POST @ /users/auth/refresh

const refreshToken = createAsyncThunk(
  'users/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const sessionId = state.auth.sessionId;
    const refreshToken = state.auth.refreshToken;

    try {
      // const {
      //   data: { data },
      // } = await axios.get('/users/current');

      const response = await axios.post(
        '/users/auth/refresh',
        { sessionId },
        {
          headers: { Authorization: `Bearer ${refreshToken}` },
        },
      );

      const data = response.data;
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
  refreshToken,
};
export default authOperations;
