import { Button, Col, Row } from 'antd';

import type { FC } from 'react';
import { batch } from 'react-redux';
import { useAppDispatch, actions } from '@/store';

const BottomRow: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Row gutter={10}>
      <Col span={6}>
        <Button danger block size="large" onClick={() => dispatch(actions.words.next())}>Нет</Button>
      </Col>
      <Col span={18}>
        <Button type="primary" block size="large" onClick={() => {
          batch(() => {
            dispatch(actions.words.next());
            dispatch(actions.teams.increaseScore());
          });
        }}>Да</Button>
      </Col>
    </Row>
  );};

export default BottomRow;
