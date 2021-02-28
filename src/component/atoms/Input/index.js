import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <div className="input-wrapper">
      <p className="label">{props.label}</p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
