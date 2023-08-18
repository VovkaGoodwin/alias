import { createSlice } from '@reduxjs/toolkit';
import words from './words.ts';
import type { Word } from './types.ts';

type WordsState = {
  words: Word[],
  currentWord: Word | null
}

const initialState: WordsState = {
  words: [],
  currentWord: null,
};

const WordsSlice = createSlice({
  name: 'alias/words',
  initialState,
  reducers: {
    add: (state) => {
      state.words = [...words];
      state.words.sort((() => Math.random() - .5));
    },
    next: (state) => {
      state.currentWord = state.words.pop() ?? null;
    },
  }
});

export default WordsSlice;

export const wordsActions = WordsSlice.actions;
