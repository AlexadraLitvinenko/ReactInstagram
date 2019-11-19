import React, { useState } from 'react';
import Post from './Post';
import Main from './Main';
import  Modal  from 'react-modal';
import PostLoader from './PostLoader';
import {useDispatch, useSelector} from "react-redux";

const Profile = (props) => {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.addPost);
    console.log(props.location.state.userid, props.location.state.user.fullName);
    console.log('session from profile ', sessionStorage.getItem('isLogged'));
    const [postModal,setpostModal ] = useState(false);
    
    return (
        <div>
            <Main isLogged={true} userName={props.location.state.user.fullName} />
            <button className='post__button' onClick={() => setpostModal(true)}>Добавить пост</button>
            {postModal?
            <Modal
            isOpen={postModal}
            onRequestClose={() => setpostModal(false)}
            ariaHideApp={false}
            className='Modal_Comments'
            overlayClassName="Overlay">
                <PostLoader />
            </Modal>
        :null}
        <div className='postsHolder'>
        { photos.map((item, index) => { return (
            <Post photo={item} key={index} postID={index} userName={props.location.state.user.fullName} />)
        }) }
        </div>
        </div>
    );
};

export default Profile;
