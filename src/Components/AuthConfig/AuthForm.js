import React, { useState } from "react";
import InputField from "../InputField";
import PrimaryButton from "../PrimaryButton";
import "./AuthForm.css";

const AuthForm = () => {
  const [formValid, setFormValid] = useState(false);
  const [inputs, setInputs] = useState({
    name: { value: "", isValid: false },
    password: { value: "", isValid: false },
    confirmPassword: { value: "", isValid: false },
    email: { value: "", isValid: false },
    phone: { value: "", isValid: false },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    console.log(inputIdentifier, enteredValue.target.value);
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue.target.value, isValid: true },
      };
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const signUpData = {
      name: inputs.name.value,
      password: inputs.password.value,
      confirmPassword: inputs.confirmPassword.value,
      email: inputs.email.value,
      phone: inputs.phone.value,
    };

    const passLengthValidation = (value) => {
      const regEx = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
      return regEx.test(value);
    };

    const emailValidation = (value) => {
      const regEx = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/);
      return regEx.test(value);
    };

    const nameIsValid = signUpData.name.trim().length > 0;
    const passwordIsValid = passLengthValidation(signUpData.password.trim());
    const confirmPasswordIsValid =
      signUpData.password === signUpData.confirmPassword &&
      passLengthValidation(signUpData.confirmPassword.trim());
    const emailIsValid = emailValidation(signUpData.email);
    const phoneIsValid =
      !isNaN(signUpData.phone) && signUpData.phone.length === 10;

    if (
      nameIsValid ||
      passwordIsValid ||
      emailIsValid ||
      confirmPasswordIsValid ||
      phoneIsValid
    ) {
      setInputs((curInputs) => {
        return {
          name: {
            value: curInputs.name.value,
            isValid: nameIsValid,
          },
          password: {
            value: curInputs.password.value,
            isValid: passwordIsValid,
          },
          confirmPassword: {
            value: curInputs.confirmPassword.value,
            isValid: confirmPasswordIsValid,
          },
          email: {
            value: curInputs.email.value,
            isValid: emailIsValid,
          },
          phone: {
            value: curInputs.phone.value,
            isValid: phoneIsValid,
          },
        };
      });
    }
    if (
      nameIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      emailIsValid &&
      phoneIsValid
    ) {
      setFormValid(true);
    }
  };

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <InputField
        label="Name"
        type="text"
        name="Name"
        onChange={inputChangedHandler.bind(this, "name")}
        value={inputs.name.value}
        invalid={inputs.name.isValid}
        required
      />
      <InputField
        label="Password"
        type="password"
        name="Password"
        onChange={inputChangedHandler.bind(this, "password")}
        value={inputs.password.value}
        invalid={inputs.password.isValid}
        required
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="Confirm Password"
        onChange={inputChangedHandler.bind(this, "confirmPassword")}
        value={inputs.confirmPassword.value}
        invalid={inputs.confirmPassword.isValid}
        required
      />
      <InputField
        label="Email Address"
        type="email"
        name="Email Address"
        onChange={inputChangedHandler.bind(this, "email")}
        value={inputs.email.value}
        invalid={inputs.email.isValid}
        required
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="Phone Number"
        onChange={inputChangedHandler.bind(this, "phone")}
        value={inputs.phone.value}
        invalid={inputs.phone.isValid}
        required
      />
      <div className="btnContainer">
        <PrimaryButton type="submit" onClick={onSubmit}>
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default AuthForm;
