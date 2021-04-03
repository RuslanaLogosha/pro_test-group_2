import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { exampleReducers } from './exampleFolder';
// import { nameReducers2 } from './example2';
// import { nameReducers3 } from './example3';

// ! ниже нужный импорт (при использовании redux-persist), исправляет некоторые баги , Репета показывал в каком-то видео
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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// ! пример конфигурации для redux-persist
const namePersistConfig = {
  key: 'authenticated',
  storage,
  whitelist: ['isAuthenticated'],
};
// const namePersistConfig2 = {
//   key: 'tabs',
//   storage,
//   whitelist: ['items'],
// };

export const store = configureStore({
  reducer: {
    someNameReducer: persistReducer(namePersistConfig, exampleReducers),
    // someNameReducer2: persistReducer(namePersistConfig2, exampleReducers),
  },

  // ! этот мидлвар нужен при использовании redux-persist
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
