import { Avatar, Button, List } from 'antd';
import type { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector, actions } from '@/store';
import AddTeam from '../AddTeam/AddTeam.tsx';

const getTeams = (state: RootState) => state.teams.teams;

const TeamsList: FC = () => {
  const teams = useAppSelector(getTeams);
  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={teams}
      loadMore={(<AddTeam />)}
      renderItem={(team) => (
        <List.Item
          key={team.id}
          actions={[
            <Button danger shape="circle" onClick={() => dispatch(actions.teams.remove(team.id))}>
              X
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar>{team.name}</Avatar>}
            title={team.name}
            />
        </List.Item>
      )}
      />
  );
};

export default TeamsList;
