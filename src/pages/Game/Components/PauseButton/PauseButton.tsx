import { PauseOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useAppDispatch, useAppSelector, actions, AppSelector } from '@/store';

const getTimerState: AppSelector<boolean> = (state) => state.timer.timerEnabled;

const PauseButton: FC = () => {
  const dispatch = useAppDispatch();
  const paused = useAppSelector(getTimerState);

  const toggleTimer = () => {
    if (paused) {
      dispatch(actions.timer.startTimer());
    } else {
      dispatch(actions.timer.stopTimer());
    }
  };

  return (
    <Button
      onClick={toggleTimer}
      icon={paused ? <PauseOutlined /> : <RightOutlined />}
    />
  );
};

export default PauseButton;
