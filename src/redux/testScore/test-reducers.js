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
          return { questionId: payload.questionId, answer: payload.answer };
        }
        return el;
      });
      return [...refreshedState];
    },
  },
  extraReducers: {
    [testScoreOperations.getQuestions.fulfilled](_state, { payload }) {
      return [];
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
    [testScoreOperations.getQuestions.pending](_state, { _payload }) {
      return [];
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
      return { ...payload.data };
    },
  },
});

export const currentTestInfoSlice = createSlice({
  name: 'test',
  initialState: { quizName: '', url: '' },
  reducers: {
    setInfo: (state, { payload }) => {
      return { ...payload };
    },
  },
  extraReducers: {
    [testScoreOperations.sendAnswers.fulfilled](_state, { _payload }) {
      return { quizName: '', url: '' };
    },
  },
});

// example for use action
// testPageIndexSlice.actions.setPlusTestPageIndex(1)

// !this need for combine reducers
const userAnswersOnTest = userAnswersOnTestSlice.reducer;
const questionsListForTest = questionsListForTestSlice.reducer;
const testPageIndex = testPageIndexSlice.reducer;
const resultsOfTest = resultsOfTestSlice.reducer;
const currentTestInfo = currentTestInfoSlice.reducer;

const testScoreReducer = combineReducers({
  userAnswersOnTest,
  questionsListForTest,
  testPageIndex,
  resultsOfTest,
  currentTestInfo,
});

export default testScoreReducer;
