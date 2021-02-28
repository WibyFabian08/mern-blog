import React from "react";

const UploadImage = (props) => {
  return (
      <div>
          {
              props.img && <img className="preview" src={props.img} alt="preview" />
          } 
          <br/>
          <input type="file" onChange={props.onChange} value={props.value}></input>
      </div>
  );
};

export default UploadImage;
