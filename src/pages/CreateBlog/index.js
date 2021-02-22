import React from "react";
import "./createblog.scss";
import { Button, Input, TextArea, UploadImage, Gap } from "../../component/atoms";
import { registerBg } from "../../assets";

const CreateBlog = () => {
  return (
    <div>
      <div className="create-blog-wrapper">
        <p className="title">Create New Blog Post</p>
        <p className='post-title'>Post Title</p>
        <Input></Input>
        <Gap height={20}></Gap>
        <div>
          <img className="preview" src={registerBg} alt="" />
        </div>
        <Gap height={20}></Gap>
        <UploadImage></UploadImage>
        <Gap height={20}></Gap>
        <TextArea></TextArea>
        <Gap height={20}></Gap>
        <div className='btn-save'>
          <Button title="save"></Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
