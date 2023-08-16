import { useEffect } from 'react';
import { Progress } from 'antd';

import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSelector, useAppSelector } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';
import useAppDisaptch from '../../../../store/hooks/useAppDisaptch.ts';

const getSeconds: AppSelector<number> = (state) => state.words.timer;
const getTimerState: AppSelector<boolean> = (state) => state.words.timerEnabled;

const Timer: FC = () => {
  const navigate = useNavigate();
  const seconds = useAppSelector(getSeconds);
  const timerEnabled = useAppSelector(getTimerState);
  const dispatch = useAppDisaptch();

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timerEnabled) {
        dispatch(actions.tick());
      }
      if (seconds === 0) {
        navigate('/');
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
