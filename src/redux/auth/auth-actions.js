import { createAction } from '@reduxjs/toolkit';

const setGoogleUser = createAction('user/google');

const authActions = {
  setGoogleUser,
};
export default authActions;
