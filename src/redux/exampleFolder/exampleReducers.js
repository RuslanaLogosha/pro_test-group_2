import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import exampleActions from './exampleActions';

// ! variable for initial state example #1
const initialState = [];

const example = createReducer(initialState, {
  [exampleActions.action1]: (state, { _payload }) => {
    return {};
  },
  [exampleActions.action2]: (state, { payload }) => {
    return { payload };
  },
});

const example2 = createReducer(
  // ! init state example #2
  // { exampleInitialState },
  {
    [exampleActions.action3]: (state, { _payload }) => {
      return {};
    },
    [exampleActions.action4]: (state, { payload }) => {
      return { payload };
    },
  },
);

export default combineReducers({
  example,
  example2,
});
