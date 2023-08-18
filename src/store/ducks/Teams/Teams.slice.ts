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
  winCondition: number,
  hasWinner: boolean,
}

const initialState: State = {
  score: 0,
  teams: [],
  activeTeam: null,
  winCondition: 10,
  hasWinner: false
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
    next: (state) => {
      if (teamsGenerator === undefined) {
        teamsGenerator = nextTeam(state.teams);
      }
      if (!state.hasWinner
        && (state.teams.find((t) => t.id === state.activeTeam)?.score ?? 0) >= state.winCondition
      ) {
        state.hasWinner = true;
      }
      const nextTeamId = teamsGenerator.next(!state.hasWinner);
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
  return 'XXX';
}

export default TeamsSlice;
export const teamsActions = TeamsSlice.actions;
