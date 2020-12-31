import { createSelectorHook } from 'react-redux';
import { RootAction, RootState } from 'src/store/types';

export const useStore = createSelectorHook<RootState, RootAction>();
