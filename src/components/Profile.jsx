/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import Post from "./Post";
import Main from "./Main";
import PostLoader from "./PostLoader";

const Profile = props => {
  const photos = useSelector(state => state.addPost);
  const userName = props.location.state.user.fullName;
  const [postModal, setpostModal] = useState(false);

  return (
    <div>
      <Main isLogged={true} userName={userName} />
      <button className="post__button" onClick={() => setpostModal(true)}>
        Добавить пост
      </button>
      {postModal ? (
        <Modal
          isOpen={postModal}
          onRequestClose={() => setpostModal(false)}
          ariaHideApp={false}
          className="Modal_Comments"
          overlayClassName="Overlay"
        >
          <PostLoader />
        </Modal>
      ) : null}
      <div className="postsHolder">
        {photos.map((item, index) => {
          return (
            <Post photo={item} key={index} postID={index} userName={userName} />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
