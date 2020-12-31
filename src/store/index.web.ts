import { persistStore } from 'redux-persist';
import { middleware } from './middlewares';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './reducers';

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: true,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default
    store.replaceReducer(newRootReducer)
  })
}

export const persistor = persistStore(store);