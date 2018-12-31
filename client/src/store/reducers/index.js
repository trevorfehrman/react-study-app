import { combineReducers } from 'redux';

import authReducer from './authReducer';
import forumReducer from './forumReducer';

export default () => {
    const reducers = combineReducers({authReducer, forumReducer});
    return reducers;
}