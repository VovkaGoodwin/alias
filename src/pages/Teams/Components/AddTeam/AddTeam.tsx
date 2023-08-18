import { Button, Form, Input, Row } from 'antd';
import useModal from 'antd/es/modal/useModal';
import type { FC } from 'react';
import { useAppDispatch, actions } from '../../../../store';
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
            dispatch(actions.teams.add(teamName));
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

