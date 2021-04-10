import { createAction } from '@reduxjs/toolkit';

const setAnswer = createAction('test/setAnswer');
const setPlusTestPageIndex = createAction('test/setPlusTestPageIndex');
const setMinusTestPageIndex = createAction('test/setMinusTestPageIndex');

const getAnswersRequest = createAction('test/getAnswersRequest');
const getAnswersSuccess = createAction('test/getAnswersSuccess');
const getAnswersError = createAction('test/getAnswersError');

const sendAnswersRequest = createAction('test/sendAnswersRequest');
const sendAnswersSuccess = createAction('test/sendAnswersSuccess');
const sendAnswersError = createAction('test/sendAnswersError');

const testScoreActions = {
  setAnswer,
  setPlusTestPageIndex,
  setMinusTestPageIndex,

  getAnswersRequest,
  getAnswersSuccess,
  getAnswersError,

  sendAnswersRequest,
  sendAnswersSuccess,
  sendAnswersError,
};
export default testScoreActions;
