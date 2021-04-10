import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { testScoreReducer } from './testScore';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const testScorePersistConfig = {
  key: 'testScore',
  storage,
  whitelist: ['userAnswersOnTest', 'questionsListForTest', 'testPageIndex'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const testScorePersistedReducer = persistReducer(
  testScorePersistConfig,
  testScoreReducer,
);

export const store = configureStore({
  reducer: {
    testScore: testScorePersistedReducer,
    auth: authPersistedReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
