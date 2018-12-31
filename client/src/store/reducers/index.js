import { combineReducers } from 'redux';

import authReducer from './authReducer';
import forumReducer from './forumReducer';
import quizReducer from './quizReducer';

export default () => {
    const reducers = combineReducers({authReducer, forumReducer, quizReducer});
    return reducers;
}