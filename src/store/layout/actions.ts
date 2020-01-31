import { createAction } from '@reduxjs/toolkit';
import { TOGGLE_SIDEBAR } from './action-types';

export const toggleSidebar = createAction(TOGGLE_SIDEBAR);