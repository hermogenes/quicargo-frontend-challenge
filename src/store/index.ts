import { combineReducers, createStore } from 'redux';
import layout from './layout';
import maps from './maps';
import delivery from '../app/delivery/store';

const reducers = combineReducers({
  layout,
  maps,
  delivery
});

const store = createStore(reducers);
export default store;