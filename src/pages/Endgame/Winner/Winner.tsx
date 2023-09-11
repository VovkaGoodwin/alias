import { useAppSelector } from '@/store';
import { useMemo } from 'react';

import type { FC } from 'react';

const Winner: FC = () => {
  const { teams } = useAppSelector(({ teams }) => teams);
  const team = useMemo(() => {
    console.log({ teams });
    let maxScore = 0;
    let teamId: string;
    teams.forEach((team) => {
      if (team.score > maxScore) {
        maxScore = team.score;
        teamId = team.id;
      }
    });
    type Team = typeof teams[0]

    return teams.find(({ id }) => id === teamId) as Team;
  }, []);


  return (
    <div>Команда: {team.name} Очки: {team.score}</div>
  );
};

export default Winner;
