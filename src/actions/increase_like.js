import { APP_ACTIONS } from "../constants.js";

const increase_likeAction = postID => ({
  type: APP_ACTIONS.INCREASE_LIKE,
  postID
});

export default increase_likeAction;
