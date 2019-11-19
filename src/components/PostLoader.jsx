import React, { useState } from 'react';
import Axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import add_postAction from '../actions/add_post';
import increaseAction from '../actions/increase';

const PostLoader = () => {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.addPost);
    const [file = '', fileLoader] = useState();
    const [imagePreviewUrl = '', setimagePreviewUrl] = useState();
      
    const handleSubmit = (e) => {
          e.preventDefault();
          const data = new FormData();
          data.append('file', file);

          Axios.post('/addPost', data);
          dispatch(increaseAction());
          dispatch(add_postAction(imagePreviewUrl));
        }
      
         const handleImageChange = (e) => {
          e.preventDefault();
      
          let reader = new FileReader();
          let newFile = e.target.files[0];
      
          reader.onloadend = () => {
            fileLoader(newFile);
            setimagePreviewUrl(reader.result);
          }
          reader.readAsDataURL(newFile)
        }
      
          let imagePreview = null;
          if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
          } else {
            imagePreview = (<div className="previewText">Выберите фото для нового поста</div>);
          };
          return (
            <div className="previewComponent">
              <form onSubmit={(e)=> handleSubmit(e)} name="file" method="post" encType="multipart/form-data">
                <input className="fileInput" 
                  type="file" 
                  onChange={(e) => handleImageChange(e)} />
                <button className="postLoader__button" 
                  type="submit" 
                  onClick={(e) => handleSubmit(e)}>Загрузить фото</button>
              </form>
              <div className="imgPreview">
                {imagePreview}
              </div>
            </div>
          )
    
};

export default PostLoader;