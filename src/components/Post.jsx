import React from 'react';
import like from '../icons/like.png';
import comment from '../icons/comment.png';
const Post = (photo, likes, comments) => {
    console.log(photo);
    return (
            <div className='post'>
                <div >
                    <img src={photo.photo} alt='profile' className='profile__photo'/>
                </div>
                 <div className='profile__likeAndComment'>
                    <div className='profile__likebox'>
                        <img src={like} alt='like' />
                    </div>
                    <div className='profile__commentbox'>
                    <img src={comment} alt='comment' />
                    </div>
                </div>

           </div> 
    );
};

export default Post;