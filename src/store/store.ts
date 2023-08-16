import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from './ducks/game/reducer';

const store = configureStore({
  reducer: {
    words: wordsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector<T> = (state: RootState) => T;
