import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './test-actions';

const userAnswersOnTest = createReducer([], {
  [actions.setAnswer]: (state, { payload }) => {
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
  [actions.getAnswersSuccess]: (_state, { _payload }) => {
    return [];
  },
});

const questionsListForTest = createReducer([], {
  [actions.getAnswersSuccess]: (_state, { payload }) => {
    return [...payload.data];
  },
});

const testPageIndex = createReducer(0, {
  [actions.setPlusTestPageIndex]: (state, { payload }) => {
    return state + payload;
  },
  [actions.setMinusTestPageIndex]: (state, { payload }) => {
    return state - payload;
  },
  [actions.getAnswersSuccess]: (_state, { _payload }) => {
    return 0;
  },
  [actions.sendAnswersSuccess]: (_state, { _payload }) => {
    return 0;
  },
});

const resultsOfTest = createReducer(
  {},
  {
    [actions.sendAnswersSuccess]: (_state, { payload }) => {
      console.log('reducer console log', payload.data);
      return { ...payload.data };
    },
  },
);

const testScoreReducer = combineReducers({
  userAnswersOnTest,
  questionsListForTest,
  testPageIndex,
  resultsOfTest,
});
export default testScoreReducer;
