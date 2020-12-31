import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { UserState } from './types';
import users from './users.json';

const initialState: Partial<UserState> = {
  id: undefined,
  name: undefined
}

type ILoginAction = {
  userId?: number
}

const loginAction: CaseReducer<Partial<UserState>, PayloadAction<ILoginAction>> = (state, action) => {
  if (!action.payload.userId) {
    throw new Error('User Id cannot be empty');
  }

  state = users[action.payload.userId];
  return state;
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: loginAction
  },
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
