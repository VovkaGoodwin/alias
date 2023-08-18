import { useEffect } from 'react';
import { Progress } from 'antd';

import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSelector, useAppSelector, actions, useAppDispatch } from '@/store';

const getSeconds: AppSelector<number> = (state) => state.timer.currentRoundTime;
const getTimerState: AppSelector<boolean> = (state) => state.timer.timerEnabled;

const Timer: FC = () => {
  const navigate = useNavigate();
  const seconds = useAppSelector(getSeconds);
  const timerEnabled = useAppSelector(getTimerState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timerEnabled) {
        dispatch(actions.timer.tick());
      }
      if (seconds === 0) {
        dispatch(actions.teams.next());
        navigate('/start');
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [dispatch, navigate, timerEnabled, seconds]);

  return (<Progress
    type="circle"
    percent={Math.round(100/60 * seconds)}
    format={() => seconds}
    size={32}
  />);
};

export default Timer;
