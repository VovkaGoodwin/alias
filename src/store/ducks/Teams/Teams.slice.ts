import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

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

let teamsGenerator: Generator<string, any, boolean>;

const TeamsSlice = createSlice({
  name: 'alias/teams',
  initialState: initialState,
  reducers: {
    increaseScore: (state) => {
      state.teams.find((t) => t.id === state.activeTeam)!.score +=1;
    },
    add: (state, action: PayloadAction<string>) => {
      state.teams.push({
        id: nanoid(),
        name: action.payload,
        score: 0,
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.teams = state.teams.filter((t) => t.id !== action.payload);
    },
    next: (state, action: PayloadAction<false | undefined>) => {
      if (teamsGenerator === undefined) {
        teamsGenerator = nextTeam(state.teams);
      }
      const play = action.payload ?? true;
      const nextTeamId = teamsGenerator.next(play);
      state.activeTeam = nextTeamId.value;
    }
  }
});

function* nextTeam(teams: Team[]) {
  const ids = teams.map(({ id }) => id);
  let play = true;
  while (play) {
    for (let i = 0; i < ids.length; i++) {
      play = yield ids[i];
    }
  }
}

export default TeamsSlice;
export const teamsActions = TeamsSlice.actions;
