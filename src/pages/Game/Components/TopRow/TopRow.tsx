import { Col, Row } from 'antd';
import type { FC } from 'react';
import PauseButton from '../PauseButton/PauseButton.tsx';
import Score from '../Score/Score.tsx';
import Timer from '../Timer/Timer.tsx';
import block from 'bem-cn';

const b = block('top-row');

const TopRow: FC = () => (
  <Row className={b()}>
    <Col flex={3}>
      <PauseButton />
    </Col>
    <Col flex={1}>
      <Timer />
    </Col>
    <Col flex={3} >
      <Score />
    </Col>
  </Row>
);

export default TopRow;
