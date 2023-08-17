import { Col, Row } from 'antd';
import block from 'bem-cn';
import type { FC, ReactNode } from 'react';
import './Layout.scss';

type LayoutProps = {
  topRow: ReactNode,
  middleRow: ReactNode,
  bottomRow: ReactNode,
}

const b = block('layout');

const Layout: FC<LayoutProps> = ({
  topRow,
  middleRow,
  bottomRow,
}) => (
  <Row className={b()}>
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24, offset: 0 }}
      md={{ span: 12, offset: 6 }}
      lg={{ span: 8, offset: 8 }}
    >
      <Row className={b('top-section').toString()} align="middle" justify="center">
        <Col span={24}>{topRow}</Col>
      </Row>
      <Row className={b('middle-section').toString()} align="middle" justify="center">
        <Col span={24}>{middleRow}</Col>
      </Row>
      <Row className={b('bottom-section').toString()} align="middle" justify="center">
        <Col span={24}>
          {bottomRow}
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Layout;
