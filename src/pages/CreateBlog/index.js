import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Button, Gap, Input, TextArea, UploadImage } from "../../component/atoms";
import { setForm, setImgPreview, sendToAPI } from '../../redux/action';
import "./createblog.scss";
import axios from 'axios';

const CreateBlog = () => {

  const {form, previewImg} = useSelector(state => state.createBlogReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {

    sendToAPI(form);

    dispatch(setForm('title', ''))
    dispatch(setForm('body', ''))
    dispatch(setForm('image', ''))

    history.push('/');
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm('image', file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  const history = useHistory();

  return (
    <div>
      <div className="create-blog-wrapper">
        <p className="title">Create New Blog Post</p>
        <p className='post-title'>Post Title</p>
        <Input value={form.title} onChange={(e) => dispatch(setForm('title', e.target.value))}></Input>
        <Gap height={20}></Gap>
        <UploadImage onChange={(e) => onImageUpload(e)} img={previewImg}></UploadImage>
        <Gap height={20}></Gap>
        <TextArea value={form.body} onChange={(e) => dispatch(setForm('body', e.target.value))}></TextArea>
        <Gap height={20}></Gap>
        <div className='btn-save'>
          <Button title="save" onClick={() => onSubmit()}></Button>
          <Gap width={20}></Gap>
          <Button title="Back" onClick={() => history.push('/')}></Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
