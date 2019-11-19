import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import add_commentAction from '../actions/add_comment';

const Comments = (props) => {
    const dispatch = useDispatch();
    const currentComments = useSelector(state => state.likecomment)[1].comments[props.postID];

    console.log(currentComments);
    const [comment, setInput] = useState();
    console.log('Comment', comment);

    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='Comments'>
            <div>
                <img src={props.photo} alt='photo' className='Comments__photo' />
                <p className='Comments__caption'>Photo caption</p>
            </div>
            <div>
                <div className='Comments__list'>
                <ul>
                    {currentComments.map((item, index) => { return <li key={index}>
                            <p className='Comments__comment'>{item[0]}</p>
                            <p>{item[1]}</p>
                        </li> })}
                </ul>
                </div>
            <form className='ui-form' onSubmit={onSubmit}>
                <p className='Comments__comment'>{props.userName}</p>
            <div className="form-row">
                <input type='text' id='comment' required autoComplete="off" onChange={event => setInput(event.target.value)} />
                <label htmlFor='comment'>Комментарий</label>
            </div>
            <button onClick={() => dispatch(add_commentAction(props.postID, props.userName, comment))}>Сохранить</button>
            </form>
            </div>
        </div>
    );
};

export default Comments;