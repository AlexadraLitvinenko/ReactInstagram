import { APP_ACTIONS } from '../constants.js';

const add_postAction = (photo) => ({
    type: APP_ACTIONS.ADD_POST,
    photo
});

export default add_postAction;