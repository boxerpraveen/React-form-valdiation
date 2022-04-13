import React from "react";
import "./InputField.css";

const InputField = ({ label, type, ...otherProps }) => {
  return (
    <div className="inputContainer">
      <label className="label">{label}</label>
      <br />
      <input className="input" type={type} {...otherProps} />
    </div>
  );
};

export default InputField;
