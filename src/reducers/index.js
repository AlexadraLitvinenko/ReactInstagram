import { combineReducers } from 'redux'

import userReducer from "./userReducer";
import likeCommentReducer from './likeCommentReducer';
import addPostReducer from './addPostReducer';

export default combineReducers({ newuser: userReducer, likecomment: likeCommentReducer, addPost: addPostReducer });