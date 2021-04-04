import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const testScoreSlice = createSlice({
  name: 'testScore',
  initialState,
  extraReducers: {},
});

export default testScoreSlice.reducer;
