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
  winCondition: number,
  hasWinner: boolean,
}

const initialState: State = {
  score: 0,
  teams: [],
  activeTeam: null,
  winCondition: 50,
  hasWinner: false
};

let teamsGenerator: Generator<string, string, boolean>;

const TeamsSlice = createSlice({
  name: 'alias/teams',
  initialState: initialState,
  reducers: {
    increaseScore: (state) => {
      (state.teams.find((t) => t.id === state.activeTeam) as Team).score +=1;
    },
    add: (state, action: PayloadAction<{name: string, id: string}>) => {
      state.teams.push({
        id: action.payload.id,
        name: action.payload.name,
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
    },
    reset: (state) => {
      state.teams = state.teams.map((team) => ({
        id: team.id,
        name: team.name,
        score: 0
      }));
      state.activeTeam = initialState.activeTeam;
      state.score = initialState.score;
      state.hasWinner = initialState.hasWinner;
      state.winCondition = initialState.winCondition;
      teamsGenerator = nextTeam(state.teams);
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
