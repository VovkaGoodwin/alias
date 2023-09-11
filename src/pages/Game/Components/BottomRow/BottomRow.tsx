import React from 'react';
import { Button, Col, Row } from 'antd';

import type { FC } from 'react';
import { useAppDispatch, actions, useAppSelector } from '@/store';
import { useNavigate } from 'react-router-dom';

const BottomRow: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { roundFinished } = useAppSelector((store) => store.timer);
  const gameAction = React.useCallback(() => {
    if (roundFinished) {
      dispatch(actions.teams.next());
      navigate('/start');
    } else {
      dispatch(actions.words.next());
    }
  }, [dispatch, roundFinished]);

  return (
    <Row gutter={10}>
      <Col span={6}>
        <Button danger block size="large" onClick={gameAction}>Нет</Button>
      </Col>
      <Col span={18}>
        <Button type="primary" block size="large" onClick={() => {
          dispatch(actions.teams.increaseScore());
          gameAction();
        }}>Да</Button>
      </Col>
    </Row>
  );
};

export default BottomRow;
