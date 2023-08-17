import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../widget/Layout';

const Settings: FC = () => {
  const navigate = useNavigate();

  return (
    <Layout
      topRow="Настройки игры"
      middleRow="очки баллы то сё 5 10"
      bottomRow={(<Button onClick={() => navigate('/start')}>Дальше</Button>)}
    />
  );
};

export default Settings;
