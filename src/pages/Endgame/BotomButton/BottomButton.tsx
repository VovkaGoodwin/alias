import { actions, useAppDispatch } from '@/store';
import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const BottomButton: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (<Button onClick={() => {
    dispatch(actions.teams.reset());
    navigate('/');
  }}>В меню</Button>);
};

export default BottomButton;
