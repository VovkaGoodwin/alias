import { PauseOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import type { FC } from 'react';
import { useAppDispatch, useAppSelector, actions, type AppSelector } from '@/store';

const getTimerState: AppSelector<boolean> = (state) => state.timer.timerEnabled;

const PauseButton: FC = () => {
  const dispatch = useAppDispatch();
  const paused = useAppSelector(getTimerState);
  const [modal, contextHolder] = Modal.useModal();

  const onClickPauseButtonHandler = () => {
    dispatch(actions.timer.stopTimer());
    modal.info({
      content: 'Игра приостановлена',
      onOk: () => {
        dispatch(actions.timer.startTimer());
      },
      okText: 'Продоложить'
    });
  };

  return (
    <>
      {contextHolder}
      <Button
        onClick={onClickPauseButtonHandler}
        icon={paused ? <PauseOutlined /> : <RightOutlined />}
      />
    </>
  );
};

export default PauseButton;
