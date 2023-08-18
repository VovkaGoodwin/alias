import { nanoid } from '@reduxjs/toolkit';
import { Button, Form, Input, Row } from 'antd';
import useModal from 'antd/es/modal/useModal';
import type { FC } from 'react';
import { useAppDispatch } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';
import { TeamOutlined } from '@ant-design/icons';

const AddTeam: FC = () => {
  const dispatch = useAppDispatch();

  const [modal, contextHolder] = useModal();
  const [form] = Form.useForm();
  const onClick = () => {
    modal.confirm({
      title: 'Новая команда',
      content: (
        <Form
          form={form}
          preserve={false}
          onFinish={({ teamName }) => {
            dispatch(actions.addTeam({
              id: nanoid(),
              name: teamName,
            }));
          }}
        >
          <Form.Item name="teamName" rules={[{ required: true }]}>
            <Input placeholder="Название команды" />
          </Form.Item>
        </Form>
      ),
      onOk: () => {
        form.submit();
      },
      icon: (<TeamOutlined />)
    });
  };

  return (
    <Row align="middle" justify="center">
      {contextHolder}
      <Button onClick={onClick}>
        Добавить команду
      </Button>
    </Row>
  );
};

export default AddTeam;

