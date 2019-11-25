import { APP_ACTIONS } from "../constants";
import Axios from "axios";
import users from "../data/userList";

const userReducer = (state = users, action) => {
  switch (action.type) {
    case APP_ACTIONS.ADD_USER:
      Axios.post("/postUser", { id: action.id, user: action.user });
      return [
        ...state,
        {
          id: action.id,
          user: action.user
        }
      ];
    case APP_ACTIONS.CHECK_USER:
      Axios.put("/checkUser", {
        login: action.login,
        password: action.password
      });
      return state.filter(item => {
        item.user.email == action.login &&
          item.user.password == action.password;
      });
    default:
      return state;
  }
};

export default userReducer;
