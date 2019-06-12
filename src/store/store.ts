import { createStore, Store } from 'redux';
import { reducer } from './reducers';
import { IAppState } from '../types';

const store: Store<IAppState> = createStore(reducer);

export default store;