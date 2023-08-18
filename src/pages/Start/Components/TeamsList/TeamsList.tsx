import { Avatar, List } from 'antd';
import type { FC } from 'react';
import { RootState, useAppSelector } from '@/store';

const getTeamsList = (state: RootState) => state.teams.teams;
const TeamsList: FC = () => {
  const teams = useAppSelector(getTeamsList);

  return (
    <List
      dataSource={teams}
      renderItem={(team) => (
        <List.Item
          key={team.id}
        >
          <List.Item.Meta
            avatar={<Avatar>{team.name}</Avatar>}
            title={team.name}
          />
          {team.score}
        </List.Item>
      )}
    />
  );
};

export default TeamsList;
