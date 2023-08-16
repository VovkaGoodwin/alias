import store from './store.ts';
import useAppDispatch from './hooks/useAppDisaptch';
import useAppSelector from './hooks/useAppSelector';
export default store;

export {
  useAppDispatch,
  useAppSelector,
};


export type {
  AppDispatch,
  RootState,
  AppSelector,
} from './store.ts';
