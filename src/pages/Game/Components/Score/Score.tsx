import type { FC } from 'react';
import { useAppSelector } from '../../../../store';
import type { AppSelector } from '../../../../store';

const getScore: AppSelector<number> = (state) => state.words.score;

const Score: FC = () => {
  const score = useAppSelector(getScore);
  return (<div style={{
    display: 'flex',
    flexDirection: 'row-reverse'
  }}>Score: {score}</div>);
};

export default Score;
