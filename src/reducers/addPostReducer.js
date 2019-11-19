import { APP_ACTIONS } from '../constants';
import photo1 from '../icons/1.png'; import photo4 from '../icons/4.png';
import photo2 from '../icons/2.png'; import photo5 from '../icons/5.png';
import photo3 from '../icons/3.png'; import photo6 from '../icons/6.png';

const addPostReducer = (state = [photo1, photo2, photo3, photo4, photo5, photo6], action
    ) => {
        console.log(action);
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