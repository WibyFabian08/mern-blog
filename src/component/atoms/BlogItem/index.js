import React from "react";
import { registerBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
  return (
    <div className="blog-item-wrapper">
      <div>
        <img className="thumb-image" src={registerBg}></img>
        <div className='desc-blog'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero voluptate maiores atque. Pariatur voluptate unde ipsam. Expedita beatae aliquid quia veniam autem architecto odio optio adipisci eaque. Magni, mollitia.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
