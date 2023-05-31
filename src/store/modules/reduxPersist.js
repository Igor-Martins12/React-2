import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import reducer from './example/reducer';

export default (reducer) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelis: ['example'],
    },
    reducer,
  );
  return persistedReducers;
};
