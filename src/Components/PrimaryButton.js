import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button className="primaryBtn" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
