import { APP_ACTIONS } from '../constants';
import Axios from 'axios';
import likeAndComments from '../data/likeAndComments';

const likeAndCommentsReducer = (state = likeAndComments, action) => {
    switch(action.type) {
        case APP_ACTIONS.INCREASE_LIKE:
            state[0].likes[action.postID] = state[0].likes[action.postID] + 1; //action.likes;
            return state;
        case APP_ACTIONS.ADD_COMMENT:
            state[1].comments[action.postID].push([action.user, action.comment]);
            Axios.post('/addComment', {postID: action.postID, user: action.user, comment: action.comment});
            return state;
        case APP_ACTIONS.INCREASE:
            state[0].likes.push(0);
            state[1].comments.push([]);
            return state;
        default:
            return state;
    }
};

export default likeAndCommentsReducer;