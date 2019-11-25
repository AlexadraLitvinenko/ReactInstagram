/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import like from "../icons/like.png";
import likeFull from "../icons/like+.png";
import comment from "../icons/comment.png";

import Comments from "./Comments";

import increase_likeAction from "../actions/increase_like";

const Post = props => {
  const postID = props.postID;
  const dispatch = useDispatch();
  const currentLikes = useSelector(state => state.likeAndComments)[0].likes[postID];
  console.log("currentlikes", currentLikes);
  const currentComments = useSelector(state => state.likeAndComments)[1]
    .comments;

  const [likes, increaseLikes] = useState(currentLikes);
  const [commentModal, setCommentModal] = useState(false);

  return (
    <div className="post">
      <div>
        <img src={props.photo} alt="profile" className="profile__photo" />
      </div>
      <div className="profile__likeAndComment">
        <div
          className="profile__likebox"
          onClick={() => {
            dispatch(increase_likeAction(postID)) && increaseLikes(likes + 1);
          }}
        >
          {likes > 0 ? (
            <img src={likeFull} alt="likeFull" />
          ) : (
            <img src={like} alt="like" />
          )}
          {likes}
        </div>
        <div
          className="profile__commentbox"
          onClick={() => setCommentModal(true)}
        >
          <img src={comment} alt="comment" />
          {currentComments[postID].length}
        </div>
      </div>
      <Modal
        isOpen={commentModal}
        onRequestClose={() => setCommentModal(false)}
        ariaHideApp={false}
        className="Modal_Comments"
        overlayClassName="Overlay"
      >
        <Comments
          photo={props.photo}
          postID={postID}
          userName={props.userName}
        />
      </Modal>
    </div>
  );
};

export default Post;
