import { combineReducers } from "redux";

import userReducer from "./userReducer";
import likeAndCommentsReducer from "./likeAndCommentsReducer";
import addPostReducer from "./addPostReducer";

export default combineReducers({
  users: userReducer,
  likeAndComments: likeAndCommentsReducer,
  addPost: addPostReducer
});
