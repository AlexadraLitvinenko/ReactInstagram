import React, { useState } from 'react';
import like from '../icons/like.png';
import likeFull from '../icons/like+.png'; 
import comment from '../icons/comment.png';
import  Modal  from 'react-modal';
import Comments from './Comments';
import {useDispatch, useSelector} from "react-redux";
import increase_likeAction from '../actions/increase_like';
const Post = (props) => {

    const dispatch = useDispatch();
    const likecomment = useSelector(state => state.likecomment);
    const currentComments = useSelector(state => state.likecomment)[1].comments;

    const [likes, increaseLikes] = useState(0);
    const [commentModal, setCommentModal] = useState(false);

    const postID = props.postID;
    
    return (
            <div className='post'>
                <div >
                    <img src={props.photo} alt='profile' className='profile__photo'/>
                </div>
                 <div className='profile__likeAndComment'>
                    <div className='profile__likebox' onClick={() => {increaseLikes(likes + 1) && dispatch(increase_likeAction(postID, likes))}}>
                        {likes > 0? <img src={likeFull} alt='like' />:<img src={like} alt='like' /> }
                        {likes}
                    </div>
                    <div className='profile__commentbox' onClick={() => setCommentModal(true)}>
                    <img src={comment} alt='comment' />{currentComments[postID].length}
                    </div>
                </div>
                <Modal
            isOpen={commentModal}
            onRequestClose={() => setCommentModal(false)}
            ariaHideApp={false}
            className='Modal_Comments'
            overlayClassName="Overlay">
                    <Comments photo={props.photo} postID={postID} userName={props.userName} />
                </Modal>

           </div> 
    );
};

export default Post;