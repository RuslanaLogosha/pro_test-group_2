import { createAction } from '@reduxjs/toolkit';

const example = createAction('TEST_example');
const example2 = createAction('TEST2_example');

// ! example actions for operations
export const someExampleRequest = createAction('SOME_someExampleRequest');
export const someExampleSuccess = createAction('SOME_someExampleSuccess');
export const someExampleError = createAction('SOME_someExampleError');

export const actions = {
  example,
  example2,

  someExampleRequest,
  someExampleSuccess,
  someExampleError,
};
