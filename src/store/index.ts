import store from './store.ts';
import useAppDispatch from './hooks/useAppDisaptch';
import useAppSelector from './hooks/useAppSelector';
import actions from './ducks/rootActions.ts';
export default store;

export {
  useAppDispatch,
  useAppSelector,
  actions,
};


export type {
  AppDispatch,
  RootState,
  AppSelector,
} from './store.ts';
