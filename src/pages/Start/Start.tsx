import { Button, Space } from 'antd';
import { useCallback, useEffect } from 'react';
import type { FC } from 'react';
import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, actions, RootState } from '@/store';
import Layout from '../../widget/Layout';
import TeamsList from './Components/TeamsList/TeamsList.tsx';

const getActiveTeam = (state: RootState) => state.teams.activeTeam;

const Start: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const teamId = useAppSelector(getActiveTeam);

  useEffect(() => () => {
    batch(() => {
      dispatch(actions.timer.setupTimer());
      if (teamId === null) {
        dispatch(actions.words.add());
        dispatch(actions.teams.next());
      }
    });
  }, []);

  const next = useCallback(() => {
    navigate('/game');
    //todo переход в начало если игра закончена
  }, []);

  return (
    <Layout
      topRow="Начало игры"
      middleRow={(<TeamsList />)}
      bottomRow={(
        <Space>
          <Button type="primary" onClick={next}>Дальше</Button>
        </Space>
      )}
    />
  );
};

export default Start;
