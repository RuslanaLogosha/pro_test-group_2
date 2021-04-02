import { createAction } from '@reduxjs/toolkit';

export const example = createAction('SOME_example');
export const example2 = createAction('SOME_example');

// ! example actions for operations
export const someExampleRequest = createAction('SOME_someExampleRequest');
export const someExampleSuccess = createAction('SOME_someExampleSuccess');
export const someExampleError = createAction('SOME_someExampleError');

/* 
or

const example = createAction('TEST_example');
const example2 = createAction('TEST2_example');

! example actions for operations
export const someExampleRequest = createAction('SOME_someExampleRequest');
export const someExampleSuccess = createAction('SOME_someExampleSuccess');
export const someExampleError = createAction('SOME_someExampleError');

export default {
  example,
  example2,

  someExampleRequest,
  someExampleSuccess,
  someExampleError,
}

*/
