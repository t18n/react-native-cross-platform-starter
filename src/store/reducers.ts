import { combineReducers } from 'redux';
import { userReducers } from './user';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
  user: userReducers,
});

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'auth'],
  blacklist: [],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer)
