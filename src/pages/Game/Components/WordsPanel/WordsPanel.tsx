import block from 'bem-cn';
import { useEffect } from 'react';
import type { FC } from 'react';
import { AppSelector, useAppDispatch, useAppSelector } from '../../../../store';
import { actions } from '../../../../store/ducks/game/reducer.ts';

const b = block('words-panel');
const getCurrentWord: AppSelector<string | null> = (state) => state.words.currentWord;

const WordsPanel: FC = () => {
  const word = useAppSelector(getCurrentWord);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(actions.addWords());
    dispatch(actions.nextWord());
  }, [dispatch]);

  return (<div className={b()}>{word}</div>);
};

export default WordsPanel;
