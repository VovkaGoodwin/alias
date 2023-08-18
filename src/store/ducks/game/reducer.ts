import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import words from '../../../words.ts';

type Team = {
  id: string,
  name: string,
  score: number,
}

type Word = {
  id: number,
  group: string,
  title: string
}

type State = {
  score: number,
  words: Word[],
  currentWord: null | Word,
  timer: number,
  timerEnabled: boolean,
  teams: Team[],
  activeTeam: string | null;
  settings: {
    timer: number,
    winCondition: number
  }
}

const initialState: State = {
  score: 0,
  words: [],
  currentWord: null,
  timer: 5,
  timerEnabled: true,
  teams: [],
  activeTeam: null,
  settings: {
    timer: 5,
    winCondition: 25,
  }
};

let teamsGenerator: Generator<string>;

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
      state.teams.find((t) => t.id === state.activeTeam)!.score +=1;
    },
    tick: (state) => {
      if (state.timerEnabled) {
        state.timer -= 1;
      }
    },
    toggleTimer: (state) => {
      state.timerEnabled = !state.timerEnabled;
    },
    setupTimer: (state) => {
      state.timer = state.settings.timer;
    },
    addTeam: (state, action: PayloadAction<{id: string, name:string}>) => {
      const { id, name } = action.payload;
      state.teams.push({
        id,
        name,
        score: 0,
      });
    },
    removeTeam: (state, action: PayloadAction<string>) => {
      state.teams = state.teams.filter((t) => t.id !== action.payload);
    },
    nextTeam: (state) => {
      if (teamsGenerator === undefined) {
        teamsGenerator = nextTeam(state.teams);
      }
      const nextTeamId = teamsGenerator.next();
      state.activeTeam = nextTeamId.value;
    }
  }
});

function* nextTeam(teams: Team[]) {
  const ids = teams.map(({ id }) => id);
  while (true) {
    for (let i = 0; i < ids.length; i++) {
      yield ids[i];
    }
  }
}

export default DictionarySlice.reducer;
export const actions = DictionarySlice.actions;
