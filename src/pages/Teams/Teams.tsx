import { Button } from 'antd';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../widget/Layout';
import TeamsList from './Components/TeamsList/TeamsList.tsx';

const Teams: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout
      topRow="Настройко команды"
      middleRow={(<TeamsList />)}
      bottomRow={(<Button onClick={() => navigate('/settings')}>Дальше</Button>)}
    />
  );
};

export default Teams;
