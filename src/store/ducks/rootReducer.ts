import Teams from './Teams';
import Timer from './Timer';
import Words from './Words';

const rootReducer = {
  teams: Teams.reducer,
  timer: Timer.reducer,
  words: Words.reducer,
};

export default rootReducer;
