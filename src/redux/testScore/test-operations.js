import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getQuestions = createAsyncThunk(
  'test/getQuestions',
  async (url, { rejectWithValue }) => {
    const config = { url };
    try {
      // baseURL assigned in auth-operations
      const { data } = await axios(config);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const sendAnswers = createAsyncThunk(
  'test/sendAnswers',
  async ({ selected, url }, { rejectWithValue }) => {
    try {
      // baseURL assigned in auth-operations
      const { data } = await axios.post(`/${url}`, selected);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const testScoreOperations = {
  getQuestions,
  sendAnswers,
};
export default testScoreOperations;
