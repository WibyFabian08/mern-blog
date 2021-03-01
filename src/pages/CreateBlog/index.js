import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from 'react-router-dom';
import { Button, Gap, Input, TextArea, UploadImage } from "../../component/atoms";
import { setForm, setImgPreview, sendToAPI, updateToAPI } from '../../redux/action';
import "./createblog.scss";

const CreateBlog = (props) => {

  const id = props.match.params.id;

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if(id) {
      setIsUpdate(true)

      axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((result) => {
        console.log('data : ', result.data.data)
        const detail = result.data.data;

        dispatch(setForm('title', detail.title))
        dispatch(setForm('body', detail.body))
        dispatch(setForm('image', detail.image));
        dispatch(setImgPreview(`http://localhost:4000/${detail.image}`))
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [])

  const {form, previewImg} = useSelector(state => state.createBlogReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const id = props.match.params.id;

    if(isUpdate) {
      updateToAPI(form, id);
    } else {
      sendToAPI(form);
    }

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
        <p className="title">{isUpdate ? 'Edit' : 'Create New'} Blog Post</p>
        <p className='post-title'>Post Title</p>
        <Input value={form.title} onChange={(e) => dispatch(setForm('title', e.target.value))}></Input>
        <Gap height={20}></Gap>
        <UploadImage onChange={(e) => onImageUpload(e)} img={previewImg}></UploadImage>
        <Gap height={20}></Gap>
        <TextArea value={form.body} onChange={(e) => dispatch(setForm('body', e.target.value))}></TextArea>
        <Gap height={20}></Gap>
        <div className='btn-save'>
          <Button title={isUpdate ? 'Update' : 'Save'} onClick={() => onSubmit()}></Button>
          <Gap width={20}></Gap>
          <Button title="Back" onClick={() => history.push('/')}></Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
