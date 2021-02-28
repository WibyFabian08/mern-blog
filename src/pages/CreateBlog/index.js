import React, { useState } from "react";
import "./createblog.scss";
import { Button, Input, TextArea, UploadImage, Gap } from "../../component/atoms";
import {useHistory} from 'react-router-dom';
import axios from "axios";

const CreateBlog = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = () => {
    console.log('title : ', title);
    console.log('body : ', body);
    console.log('image : ', image);

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        "Content-Type": "Multipart/Form-Data"
      }
    })
    .then((result) => {
      console.log(result)
      setTitle('');
      setBody('')
      setImage('')
      history.push('/')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  const history = useHistory();

  return (
    <div>
      <div className="create-blog-wrapper">
        <p className="title">Create New Blog Post</p>
        <p className='post-title'>Post Title</p>
        <Input value={title} onChange={(e) => setTitle(e.target.value)}></Input>
        <Gap height={20}></Gap>
        <UploadImage onChange={(e) => onImageUpload(e)} img={imagePreview}></UploadImage>
        <Gap height={20}></Gap>
        <TextArea value={body} onChange={(e) => setBody(e.target.value)}></TextArea>
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
