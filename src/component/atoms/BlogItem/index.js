import React from "react";
import { registerBg } from "../../../assets";
import Button from "../Button";
import Gap from "../Gap";
import "./blogitem.scss";
import {useHistory} from 'react-router-dom';

const BlogItem = (props) => {

  const history = useHistory();
  
  return (
    <div className="blog-item-wrapper">
      <div>
        <img className="thumb-image" src={props.image}></img>
        <div className="desc-blog">
          <p className="title">{props.title}</p>
          <p className="author">{props.name} - {props.date}</p>
          <p className="body">{props.body}</p>
        </div>
        <Gap height={20}></Gap>
        <Button title="view detail" onClick={() => history.push('/detail-blog')}></Button>
      </div>
    </div>
  );
};

export default BlogItem;
