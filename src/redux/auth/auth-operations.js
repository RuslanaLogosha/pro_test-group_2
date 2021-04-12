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
      const {
        data: { data },
      } = await axios.post('/users/auth/register', user);

      token.set(data.token);
      toast.success('✔️ Congratulations, you have successfully registered');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      return rejectWithValue(error.response.data.message);
    }
  },
);

// GET @ /users/auth/google

const googleAuth = createAsyncThunk(
  'users/auth/google',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/users/auth/google');
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

// POST @ /users/auth/logout

const logOut = createAsyncThunk(
  'users/auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      const {
        data: { data },
      } = await axios.get('/users/current');

      return data;
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
      const {
        data: { data },
      } = await axios.post(
        '/users/auth/refresh',
        { sessionId },
        {
          headers: { Authorization: `Bearer ${refreshToken}` },
        },
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

const authOperations = {
  register,
  logIn,
  googleAuth,
  logOut,
  fetchCurrentUser,
  refreshToken,
};
export default authOperations;
