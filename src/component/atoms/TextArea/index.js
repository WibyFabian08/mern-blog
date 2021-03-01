import React from "react";
import "./textarea.scss";

const TextArea = (props) => {
  return (
    <div>
      <textarea
        name="input-body"
        rows="10"
        className="input-body"
        onChange={props.onChange}
        value={props.value}
      ></textarea>
    </div>
  );
};

export default TextArea;
