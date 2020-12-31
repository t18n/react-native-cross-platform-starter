import { persistStore } from 'redux-persist';
import { middleware } from './middlewares';
import { persistedReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

/**
 * Add Redux flipper
 */
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: false, // Disable Redux dev-tools on mobile app
});

export const persistor = persistStore(store);