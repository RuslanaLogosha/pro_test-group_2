import axios from 'axios';

import { testScoreActions } from './';

const getAnswers = url => async dispatch => {
  dispatch(testScoreActions.getAnswersRequest());
  const config = { url };

  try {
    const { data } = await axios(config);

    dispatch(testScoreActions.getAnswersSuccess(data));
  } catch (error) {
    dispatch(testScoreActions.getAnswersError(error));
  }
};

const sendAnswers = (answers, url) => async dispatch => {
  try {
    dispatch(testScoreActions.sendAnswersRequest());

    const { data } = await axios.post(
      `https://backend-for-pro-test.herokuapp.com/${url}`,
      answers,
    );

    dispatch(testScoreActions.sendAnswersSuccess(data));
  } catch (error) {
    dispatch(testScoreActions.sendAnswersError(error));
  }
};

const testScoreOperations = {
  getAnswers,
  sendAnswers,
};
export default testScoreOperations;
