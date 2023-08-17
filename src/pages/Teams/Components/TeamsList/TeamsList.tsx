import { Avatar, Button, List } from 'antd';
import type { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';
import AddTeam from '../AddTeam/AddTeam.tsx';

const TeamsList: FC = () => {
  const teams = useAppSelector(state => state.words.teams);
  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={teams}
      loadMore={(<AddTeam />)}
      renderItem={(team) => (
        <List.Item
          key={team.id}
          actions={[
            <Button danger shape="circle" onClick={() => dispatch(actions.removeTeam(team.id))}>
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
