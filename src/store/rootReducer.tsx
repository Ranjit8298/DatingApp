import {combineReducers} from '@reduxjs/toolkit';
import auth from '../modules/auth';
import dashboard from '../modules/dashboard';
export interface App {
  auth: any;
  dashboard: any;
}

export default combineReducers({
  auth,
  dashboard,
});
