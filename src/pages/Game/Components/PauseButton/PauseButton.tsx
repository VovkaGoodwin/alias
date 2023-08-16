import { Button } from 'antd';
import { useEffect } from 'react';
import type { FC } from 'react';
import { useAppDispatch } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';

const PauseButton: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log('PauseButton');
  });
  return (
    <Button onClick={() => dispatch(actions.toggleTimer())}>Pause Button</Button>
  );
};

export default PauseButton;
