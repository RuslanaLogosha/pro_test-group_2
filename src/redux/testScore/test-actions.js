import { createAction } from '@reduxjs/toolkit';

const setAnswer = createAction('test/setAnswer');

const getAnswersRequest = createAction('test/getAnswersRequest');
const getAnswersSuccess = createAction('test/getAnswersSuccess');
const getAnswersError = createAction('test/getAnswersError');



const testScoreActions = {
  setAnswer,
  getAnswersRequest,
  getAnswersSuccess,
  getAnswersError,
};
export default testScoreActions;
