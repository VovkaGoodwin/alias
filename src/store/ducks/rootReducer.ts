import Timer from './Timer';
import Words from './Words';

const rootReducer = {
  timer: Timer.reducer,
  words: Words.reducer,
};

export default rootReducer;
