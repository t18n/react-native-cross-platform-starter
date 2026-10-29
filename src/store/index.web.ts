import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './reducers';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const newRootReducer = require('./reducers').default
    store.replaceReducer(newRootReducer)
  })
}

export const persistor = persistStore(store);
