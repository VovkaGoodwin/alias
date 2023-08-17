import type { FC } from 'react';
import { useAppSelector } from '../../../../store';
import type { AppSelector } from '../../../../store';

const getScore: AppSelector<number> = (state) => {
  const { activeTeam, teams } = state.words;
  if (activeTeam !== null) {
    return teams.find(({ id }) => id === activeTeam)?.score ?? 0;
  }
  return 0;
};

const Score: FC = () => {
  const score = useAppSelector(getScore);
  return (<div style={{
    display: 'flex',
    flexDirection: 'row-reverse'
  }}>Score: {score}</div>);
};

export default Score;
