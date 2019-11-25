import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add_commentAction from "../actions/add_comment";

const Comments = props => {
  const dispatch = useDispatch();
  const currentComments = useSelector(state => state.likeAndComments)[1]
    .comments[props.postID];
  const currentPhoto = props.photo;
  const userName = props.userName;
  const postID = props.postID;

  const [input, setInput] = useState(currentComments);

  return (
    <div className="Comments">
      <div>
        <img src={currentPhoto} alt="photo" className="Comments__photo" />
      </div>
      <div>
        <div className="Comments__list">
          <ul>
            {currentComments.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item[0]}</p>
                  <p>{item[1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <p>{userName}</p>
        <div className="form-row">
          <input
            type="text"
            id="comment"
            required
            autoComplete="off"
            onChange={event => setInput(event.target.value)}
          />
          <label htmlFor="comment">Комментарий</label>
          <button
            type="submit"
            className="Comments__comment"
            onClick={() => dispatch(add_commentAction(postID, userName, input))}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
