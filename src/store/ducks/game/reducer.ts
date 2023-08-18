import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Team = {
  id: string,
  name: string,
  score: number,
}

type State = {
  score: number,
  teams: Team[],
  activeTeam: string | null;
  settings: {
    winCondition: number
  }
}

const initialState: State = {
  score: 0,
  teams: [],
  activeTeam: null,
  settings: {
    winCondition: 25,
  }
};

let teamsGenerator: Generator<string>;

const DictionarySlice = createSlice({
  name: 'alias/words',
  initialState: initialState,
  reducers: {
    increaseScore: (state) => {
      state.teams.find((t) => t.id === state.activeTeam)!.score +=1;
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
