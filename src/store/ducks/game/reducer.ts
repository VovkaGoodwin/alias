import { createSlice } from '@reduxjs/toolkit';
import words from '../../../words.ts';

type State = {
  score: number,
  words: string[],
  currentWord: null | string,
  timer: number,
  timerEnabled: boolean,
}

const initialState: State = {
  score: 0,
  words: [],
  currentWord: null,
  timer: 60,
  timerEnabled: true,
};


const DictionarySlice = createSlice({
  name: 'alias/words',
  initialState: initialState,
  reducers: {
    addWords: (state) => {
      state.words = [...words];
      state.words.sort((() => Math.random() - .5));
    },
    nextWord: (state) => {
      state.currentWord = state.words.pop() ?? null;
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    tick: (state) => {
      if (state.timerEnabled) {
        state.timer -= 1;
      }
    },
    toggleTimer: (state) => {
      state.timerEnabled = !state.timerEnabled;
    }
  }
});

export default DictionarySlice.reducer;
export const actions = DictionarySlice.actions;
