import { Typography } from 'antd';
import block from 'bem-cn';
import { useEffect } from 'react';
import type { FC } from 'react';
import { RootState, useAppDispatch, useAppSelector, actions } from '@/store';
import './WordsPanel.scss';

const b = block('words-panel');
const getCurrentWord = (state: RootState) => state.words.currentWord;

const WordsPanel: FC = () => {
  const word = useAppSelector(getCurrentWord);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.words.next());
  }, [dispatch]);

  if (word === null) {
    return null;
  }

  return (
    <div className={b()}>
      <Typography.Title level={4}>{word.title}</Typography.Title>
      <Typography.Text type="secondary">{word.group}</Typography.Text>
    </div>
  );
};

export default WordsPanel;
