import { APP_ACTIONS } from '../constants.js';

const increase_likeAction = (postID, likes) => ({
    type: APP_ACTIONS.INCREASE_LIKE,
    postID,
    likes
});

export default increase_likeAction;
