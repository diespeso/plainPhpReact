import { configureStore, combineReducers } from '@reduxjs/toolkit';

import user from './user';
import userPosts from './userPosts';
import newComment from './newComment';

const reducer = combineReducers({
    user,
    userPosts,
    newComment,
});

const store = configureStore({
    reducer,
});

export default store;