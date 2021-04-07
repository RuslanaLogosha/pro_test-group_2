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

const testScoreOperations = {
  getAnswers,
};
export default testScoreOperations;
