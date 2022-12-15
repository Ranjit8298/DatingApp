import {combineReducers} from '@reduxjs/toolkit';
import auth from '../modules/auth';
export interface App {
    auth: any;
}

export default combineReducers({
    auth,
});
