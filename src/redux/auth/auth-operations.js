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
      if (error.response.data.message === 'Email is used') {
        toast.error('❌ Sorry, this email is already in use');
        return rejectWithValue(error.response.data.message);
      }

      if (
        error.response.data.message === 'Failed: email must be a valid email'
      ) {
        toast.warning('❗❗ Enter a valid email');
        return rejectWithValue(error.response.data.message);
      }

      if (
        error.response.data.message ===
        'Failed: password length must be at least 6 characters long'
      ) {
        toast.warning(
          '❗❗ Password length must be at least 6 characters long',
        );
        return rejectWithValue(error.response.data.message);
      }

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
      if (error.response.data.message === `Email or password is wrong`) {
        toast.error('❌ Email or password is wrong');
        return rejectWithValue(error.response.data.message);
      }

      if (
        error.response.data.message ===
        `Cannot read property 'validPassword' of null`
      ) {
        toast.error('❌ This user is not registered');
        return rejectWithValue(error.response.data.message);
      }

      if (
        error.response.data.message === 'Failed: email must be a valid email'
      ) {
        toast.error('❌ Email or password is wrong');
        return rejectWithValue(error.response.data.message);
      }

      if (
        error.response.data.message ===
        'Failed: password length must be at least 6 characters long'
      ) {
        toast.error('❌ Email or password is wrong');
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error.response.data.message);
    }
  },
);

// GET @ /users/auth/google

const googleAuth = createAsyncThunk(
  'users/auth/google',
  async (_, { rejectWithValue }) => {
    try {
      // Google's OAuth 2.0 endpoint for requesting an access token
      const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      const form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);

      // Parameters to pass to OAuth 2.0 endpoint.
      const params = {
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: `https://backend-for-pro-test.herokuapp.com/users/auth/google-redirect`,
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/userinfo.email',
        state: 'pass-through value',
      };

      // Add form parameters as hidden input values.
      for (const p in params) {
        const input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }

      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
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
