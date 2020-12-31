import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Dispatch, MiddlewareAPI } from 'redux';
import { RootState } from 'src/store/types';
import { userActions } from './user/index';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

/**
 * Middleware logger
 */
const loggerMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  const state: RootState = _store.getState();
  console.log('User', state.user.name);

  switch (action.type) {
    case userActions.login.type:
      console.log('User login action');
      break;
    default:
      console.log(JSON.stringify(action));
      break;
  }

  next(action);
};

export const middleware = [
  loggerMiddleware,
  ...getDefaultMiddleware({
    serializableCheck: {
      // specifically ignore all the action types it dispatches for redux-persist
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
]