import { Button, Space } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../widget/Layout';

const Start: FC = () => {
  const navigate = useNavigate();

  return (
    <Layout
      topRow="Настроечки"
      middleRow="В процессе"
      bottomRow={(
        <Space>
          <Button type="primary" onClick={() => navigate('/game')}>Дальше</Button>
        </Space>
      )}
    />
  );
};

export default Start;
