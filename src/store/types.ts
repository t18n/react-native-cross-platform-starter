import { store } from '.';
import { rootReducer } from './reducers';

export type RootState = ReturnType<typeof rootReducer>
export type RootAction = ReturnType<typeof store.dispatch>
export type AppDispatch = typeof store.dispatch;
