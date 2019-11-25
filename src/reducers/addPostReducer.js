import { APP_ACTIONS } from '../constants';
import photos from '../data/photos';

const addPostReducer = (state = photos, action
    ) => {
    switch(action.type) {
        case APP_ACTIONS.ADD_POST:
           return [
                ...state,
                  action.photo
              ] ;
        default:
            return state;
    }
};

export default addPostReducer;