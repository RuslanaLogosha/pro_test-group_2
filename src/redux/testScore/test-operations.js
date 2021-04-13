import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getQuestions = createAsyncThunk(
  'test/getQuestions',
  async (url, { rejectWithValue }) => {
    try {
      // baseURL assigned in auth-operations
      const { data } = await axios(`/${url}/questions`);
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
      const { data } = await axios.post(`/${url}/results`, selected);

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
