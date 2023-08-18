import { PauseOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useAppDispatch, useAppSelector, actions, AppSelector } from '@/store';

const getTimerState: AppSelector<boolean> = (state) => state.timer.timerEnabled;

const PauseButton: FC = () => {
  const dispatch = useAppDispatch();
  const paused = useAppSelector(getTimerState);
  return (
    <Button
      onClick={() => dispatch(actions.timer.toggleTimer())}
      icon={paused ? <PauseOutlined /> : <RightOutlined />}
    />
  );
};

export default PauseButton;
