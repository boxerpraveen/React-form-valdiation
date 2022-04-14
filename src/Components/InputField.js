import React from "react";
import "./InputField.css";

const InputField = ({ label, invalid, type, ...otherProps }) => {
  let invalidText;

  if (invalid) {
    if (label === "Name") {
      invalidText = (
        <small className="invalidText">Please check your UserName.</small>
      );
    }
    if (label === "Password") {
      invalidText = (
        <small className="invalidText">
          Password should between 6 to 20 characters which contain at least 1
          numeric digit, 1 uppercase and 1 lowercase letter
        </small>
      );
    }
    if (label === "Confirm Password") {
      invalidText = (
        <small className="invalidText">Password should be same</small>
      );
    }
    if (label === "Email Address") {
      invalidText = (
        <small className="invalidText">
          Please enter your valid Email Address.
        </small>
      );
    }
    if (label === "Phone Number") {
      invalidText = (
        <small className="invalidText">
          Please enter your valid Phone Number.
        </small>
      );
    }
  }

  return (
    <div className="inputContainer">
      <label className="label">{label}</label>
      <br />
      <input className="input" type={type} {...otherProps} />
      {invalidText}
    </div>
  );
};

export default InputField;
