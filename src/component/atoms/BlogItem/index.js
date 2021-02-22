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
            <p className='body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero voluptate maiores atque. Pariatur voluptate unde ipsam. Expedita beatae aliquid quia veniam autem architecto odio optio adipisci eaque. Magni, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae obcaecati hic omnis mollitia numquam nulla quam rerum molestiae illo impedit quisquam autem, veniam laudantium tempore deserunt sint eligendi explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore sint voluptas ab excepturi molestiae dolor laudantium ad, quas magnam vel atque, alias necessitatibus! Rerum minima consequuntur optio voluptatem delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam eaque dolorum, nisi quaerat deleniti! Itaque ipsam aliquid fuga, obcaecati, explicabo labore doloremque rem nulla consectetur earum corrupti nobis velit.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
