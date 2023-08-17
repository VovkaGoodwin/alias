import { Button, Space } from 'antd';
import { useCallback, useEffect } from 'react';
import type { FC } from 'react';
import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { actions } from '../../store/ducks/game/reducer.ts';
import Layout from '../../widget/Layout';
import TeamsList from './Components/TeamsList/TeamsList.tsx';

const Start: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const teamId = useAppSelector((state) => state.words.activeTeam);

  useEffect(() => () => {
    batch(() => {
      dispatch(actions.setupTimer());
      if (teamId === null) {
        dispatch(actions.addWords());
        dispatch(actions.nextTeam());
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
