import React from "react";
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
          <div className='wadah'>
            <p className="title">{props.title}</p>
            <div className='wadah-edit'>
              <p className='edit' onClick={() => history.push(`/create-blog/${props._id}`)}>Edit</p> | <p className='hapus' onClick={props.onDelete}>Hapus</p>
            </div>
          </div>
          <p className="author">{props.name} - {props.date}</p>
          <p className="body">{props.body}</p>
        </div>
        <Gap height={20}></Gap>
        <Button title="view detail" onClick={() => history.push(`/detail-blog/${props._id}`)}></Button>
      </div>
    </div>
  );
};

export default BlogItem;
