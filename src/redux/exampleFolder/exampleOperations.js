import axios from 'axios';
// можно использовать аксиос или нового фаворита на замену axios - "got"

import { exampleActions } from './exampleActions';

const baseUrl = 'https://someurl.herokuapp.com';

export const getSomeExample = () => async dispatch => {
  dispatch(exampleActions.someExampleRequest());

  try {
    const { data } = await axios(`${baseUrl}/someurl`);

    const someObj = data.some.map(some => ({ ...some }));

    dispatch(exampleActions.someExampleSuccess(someObj));
  } catch (error) {
    dispatch(exampleActions.someExampleError(error));
  }
};

/* 
or

const getSomeExample = () => async dispatch => {
  dispatch(exampleActions.someExampleRequest());

  try {
    const { data } = await axios(`${baseUrl}/someurl`);

    const someObj = data.some.map(some => ({ ...some }));

    dispatch(exampleActions.someExampleSuccess(someObj));
  } catch (error) {
    dispatch(exampleActions.someExampleError(error));
  }
};

export default {
  getSomeExample,
};
*/
