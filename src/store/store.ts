import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './ducks/rootReducer.ts';

const store = configureStore({
  reducer: rootReducer
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector<T> = (state: RootState) => T;
