import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from './Post';
import photo1 from '../icons/1.png'; import photo4 from '../icons/4.png';
import photo2 from '../icons/2.png'; import photo5 from '../icons/5.png';
import photo3 from '../icons/3.png'; import photo6 from '../icons/6.png';
//import like_decrementAction from "../actions/like_decrement";
//import like_incrementAction from "../actions/like_increment";

const Profile = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
    const likes = 5; const comments = 6;
    console.log(props);

    return (
        <div className='postsHolder'>
        { photos.map((item, index) => { return (
            <Post photo={item} likes={likes} comments={comments} key = { index } />)
        }) }
        </div>
    );
};

export default Profile;


// const Counter = () => {
//     const dispatch = useDispatch();
//     const count = useSelector(state => state.count);

//     console.log('count component: ', count);

//     return (
//         <div>
//             <h1>Counter component</h1>
//             <button onClick={() => dispatch(incrementAction)} >increment</button>
//             <button onClick={() => dispatch(decrementAction)} >decrement</button>
//             <button onClick={() => dispatch(resetAction)} >reset</button>
//             <h1>{`our store is ${count}: `}</h1>
//         </div>
//     );
// };