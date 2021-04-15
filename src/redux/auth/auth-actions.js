import { createAction } from '@reduxjs/toolkit';

const setGoogleUser = createAction('user/google');

const setUserLocation = createAction('uesr/location');

const authActions = {
  setGoogleUser,
  setUserLocation,
};

export default authActions;
