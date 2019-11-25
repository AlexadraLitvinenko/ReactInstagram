import { APP_ACTIONS } from "../constants.js";

const add_userAction = (id, user) => ({
  type: APP_ACTIONS.ADD_USER,
  id,
  user
});

export default add_userAction;
