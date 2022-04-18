import React from "react";
import "./InputField.css";

const InputField = ({ label, invalid, type, ...otherProps }) => {
  let invalidText;

  if (invalid) {
    if (label === "Name") {
      invalidText = "Please check your Name.";
    }
    if (label === "Password") {
      invalidText =
        "Password should between 6 to 20 characters which contain at least 1 numeric digit, 1 uppercase and 1 lowercase letter";
    }
    if (label === "Confirm Password") {
      invalidText = "Password should be same";
    }
    if (label === "Email Address") {
      invalidText = "Please enter your valid Email Address.";
    }
    if (label === "Phone Number") {
      invalidText = "Please enter your valid Phone Number.";
    }
  }

  const inputClass = invalid ? "input " : "input invalid";

  return (
    <div className="inputContainer">
      <input className={inputClass} type={type} {...otherProps} />
      <label className="label">{label}</label>
      <small className="invalidText">{invalidText}</small>
    </div>
  );
};

export default InputField;
