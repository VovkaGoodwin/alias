import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TimerState = {
  currentRoundTime: number,
  timerEnabled: boolean,
  settingsTime: number,
  roundFinished: boolean,
}

const initialState: TimerState = {
  currentRoundTime: 0,
  timerEnabled: true,
  settingsTime: 5,
  roundFinished: false
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
    setupTimer: (state) => {
      state.currentRoundTime = state.settingsTime;
    },
    setRoundTime: (state, action: PayloadAction<number>) => {
      state.settingsTime = action.payload;
    },
    setRoundState: (state, action: PayloadAction<boolean>) => {
      state.roundFinished = action.payload;
    },
    startTimer: (state) => {
      state.timerEnabled = true;
    },
    stopTimer: (state) => {
      state.timerEnabled = false;
    }
  }
});

export default TimerSlice;

export const timerActions = TimerSlice.actions;
