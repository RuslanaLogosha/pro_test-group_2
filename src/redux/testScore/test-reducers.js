import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import testScoreOperations from './test-operations';

export const userAnswersOnTestSlice = createSlice({
  name: 'test',
  initialState: [],
  reducers: {
    setAnswer: (state, { payload }) => {
      const isAlreadyAnswered = state.find(
        el => el.questionId === payload.questionId,
      );
      if (!isAlreadyAnswered) {
        return [...state, payload];
      }

      const refreshedState = state.map(el => {
        if (isAlreadyAnswered.questionId === el.questionId) {
          return { questionId: payload.questionId, result: payload.result };
        }
        return el;
      });
      return [...refreshedState];
    },
    extraReducers: {
      [testScoreOperations.getQuestions.fulfilled](_state, { _payload }) {
        return [];
      },
    },
  },
});

export const questionsListForTestSlice = createSlice({
  name: 'test',
  initialState: [],
  extraReducers: {
    [testScoreOperations.getQuestions.fulfilled](_state, { payload }) {
      return [...payload.data];
    },
  },
});

export const testPageIndexSlice = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    setPlusTestPageIndex: (state, { payload }) => {
      return state + payload;
    },
    setMinusTestPageIndex: (state, { payload }) => {
      return state - payload;
    },
  },
  extraReducers: {
    [testScoreOperations.getQuestions.fulfilled](_state, { _payload }) {
      return 0;
    },
    [testScoreOperations.sendAnswers.fulfilled](_state, { _payload }) {
      return 0;
    },
  },
});

export const resultsOfTestSlice = createSlice({
  name: 'test',
  initialState: {},
  extraReducers: {
    [testScoreOperations.sendAnswers.fulfilled](_state, { payload }) {
      return payload.data;
    },
  },
});

// !this need for combine reducers
const userAnswersOnTest = userAnswersOnTestSlice.reducer;
const questionsListForTest = questionsListForTestSlice.reducer;
const testPageIndex = testPageIndexSlice.reducer;
const resultsOfTest = resultsOfTestSlice.reducer;

const testScoreReducer = combineReducers({
  userAnswersOnTest,
  questionsListForTest,
  testPageIndex,
  resultsOfTest,
});

export default testScoreReducer;
