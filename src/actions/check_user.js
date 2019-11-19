import { APP_ACTIONS } from '../constants.js';

const check_userAction = (login, password) => ({
    type: APP_ACTIONS.CHECK_USER,
    login,
    password
});

export default check_userAction;