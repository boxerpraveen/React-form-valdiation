import React from "react";
import InputField from "../InputField";
import PrimaryButton from "../PrimaryButton";
import "./AuthForm.css";

const AuthForm = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <InputField
        label="Name"
        type="text"
        name="Name"
        onChange={handleChange}
        required
      />
      <InputField
        label="Password"
        type="password"
        name="Password"
        onChange={handleChange}
        required
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="Confirm Password"
        onChange={handleChange}
        required
      />
      <InputField
        label="Email Address"
        type="email"
        name="Email Address"
        onChange={handleChange}
        required
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="Phone Number"
        onChange={handleChange}
        required
      />
      <div className="btnContainer">
        <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      </div>
    </form>
  );
};

export default AuthForm;
