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

  useEffect(() => {
    if (teamId === 'XXX') {
      navigate('/endgame');
    }
    return () => {
      batch(() => {
        dispatch(actions.timer.setupTimer());
        dispatch(actions.timer.setRoundState(false));
        if (teamId === null) {
          dispatch(actions.words.add());
          dispatch(actions.teams.next());
        }
      });
    };
  }, [teamId]);

  const next = useCallback(() => {
    dispatch(actions.timer.startTimer());
    navigate('/game');
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
