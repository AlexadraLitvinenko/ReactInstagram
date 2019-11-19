import { APP_ACTIONS } from '../constants.js';

const add_commentAction = (postID, user, comment) => ({
    type: APP_ACTIONS.ADD_COMMENT,
    postID,
    user,
    comment
});

export default add_commentAction;
