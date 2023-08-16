import type { FC } from 'react';
import Layout from '../../widget/Layout';
import BottomRow from './Components/BottomRow/BottomRow.tsx';
import TopRow from './Components/TopRow/TopRow.tsx';
import WordsPanel from './Components/WordsPanel/WordsPanel.tsx';

const Game: FC = () => (
  <Layout
    topRow={(<TopRow />)}
    middleRow={(<WordsPanel />)}
    bottomRow={(<BottomRow />)}
  />
);

export default Game;
