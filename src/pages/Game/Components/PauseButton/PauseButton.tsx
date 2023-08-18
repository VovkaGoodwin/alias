import { PauseOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';

const PauseButton: FC = () => {
  const dispatch = useAppDispatch();
  const paused = useAppSelector(state => state.words.timerEnabled);
  return (
    <Button
      onClick={() => dispatch(actions.toggleTimer())}
      icon={paused ? <PauseOutlined /> : <RightOutlined />}

    />
  );
};

export default PauseButton;
