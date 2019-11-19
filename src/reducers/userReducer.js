import { APP_ACTIONS } from '../constants'
import Axios from 'axios';

const userReducer = (state = [{
    id: '5687fjfd',
    user: {
        fullname: 'Alex',
        name: 'Alex',
        email: 'alex@mail.ru',
        password: '123'
    }
}] , action) => {

    switch(action.type) {
        case APP_ACTIONS.ADD_USER:
            Axios.post('/postUser', { id: action.id, user: action.user });
            return [
                ...state,
                {
                  id: action.id,
                  user: action.user,
                }
              ] ;
        case APP_ACTIONS.CHECK_USER:
              Axios.put('/checkUser', {login: action.login, password: action.password});
               return state.filter((item) => {return (item.user.email == action.login, item.user.password == action.password)});
        default:
            return state;
    }
};

export default userReducer;
