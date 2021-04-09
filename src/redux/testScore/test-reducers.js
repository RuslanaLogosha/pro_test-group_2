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

const saveResultsOfTest = createReducer(
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
  saveResultsOfTest,
});
export default testScoreReducer;
