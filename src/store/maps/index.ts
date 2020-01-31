import { enableMapsUse } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const mapsReducer = createReducer({ mapsEnabled: false }, {
  [enableMapsUse.type]: state => { state.mapsEnabled = true; }
});

export default mapsReducer;