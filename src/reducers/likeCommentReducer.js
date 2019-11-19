import { APP_ACTIONS } from '../constants';
import Axios from 'axios';

const likeCommentReducer = (state = 
    [{likes: [0, 0, 0, 0, 0, 0, 0]}, {comments: [[['user1', 'So nice!'] , ['user2', 'Yeah']], [], [], [], [], [], []]} ], action) => {
    switch(action.type) {
        case APP_ACTIONS.INCREASE_LIKE:
            state[0].likes[action.postID] = action.likes;
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

export default likeCommentReducer;