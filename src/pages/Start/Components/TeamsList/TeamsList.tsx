import { Avatar, List } from 'antd';
import type { FC } from 'react';
import { useAppSelector } from '../../../../store';

const TeamsList: FC = () => {
  const teams = useAppSelector(state => state.words.teams);

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
