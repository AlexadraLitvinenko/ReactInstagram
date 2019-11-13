import { APP_ACTIONS } from '../constants'

const userReducer = (state = [{
    id: '5687fjfd',
    user: {
        fullname: 'Alex',
        name: 'Alex',
        email: 'alex@mail.ru',
        password: '123'
    }
}] , action) => {
    console.log('reducer: ', action);
    switch(action.type) {
        case APP_ACTIONS.ADD_USER:
            return [
                ...state,
                {
                  id: action.id,
                  user: action.user,
                }
              ] ;
        default:
            return state;
    }
};

export default userReducer;
