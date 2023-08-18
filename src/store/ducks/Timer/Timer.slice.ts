import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TimerState = {
  currentRoundTime: number,
  timerEnabled: boolean,
  settingsTime: number
}

const initialState: TimerState = {
  currentRoundTime: 0,
  timerEnabled: true,
  settingsTime: 5,
};


const TimerSlice = createSlice({
  name: 'alias/timer',
  initialState,
  reducers: {
    tick: (state) => {
      if (state.timerEnabled) {
        state.currentRoundTime -= 1;
      }
    },
    toggleTimer: (state) => {
      state.timerEnabled = !state.timerEnabled;
    },
    setupTimer: (state) => {
      state.currentRoundTime = state.settingsTime;
    },
    setRoundTime: (state, action: PayloadAction<number>) => {
      state.settingsTime = action.payload;
    }
  }
});

export default TimerSlice;

export const timerActions = TimerSlice.actions;
