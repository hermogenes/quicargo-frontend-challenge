import { toggleSidebar } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const layoutReducer = createReducer({ hideSide: true }, {
  [toggleSidebar.type]: state => { state.hideSide = !state.hideSide }
});

export default layoutReducer;