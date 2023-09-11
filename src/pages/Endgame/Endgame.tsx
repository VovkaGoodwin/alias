import BottomButton from '@/pages/Endgame/BotomButton/BottomButton.tsx';
import Winner from '@/pages/Endgame/Winner/Winner.tsx';
import Layout from '@/widget/Layout';
import type { FC } from 'react';

const Endgame: FC = () => (
  <Layout
    topRow="Игра окончена"
    middleRow={<Winner />}
    bottomRow={<BottomButton />}
  />
);

export default Endgame;
