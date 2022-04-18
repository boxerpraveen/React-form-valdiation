import React, { useState } from "react";
import InputField from "../InputField";
import PrimaryButton from "../PrimaryButton";
import "./AuthForm.css";

const AuthForm = () => {
  const [inputs, setInputs] = useState({
    name: { value: "", isValid: false },
    password: { value: "", isValid: false },
    confirmPassword: { value: "", isValid: false },
    email: { value: "", isValid: false },
    phone: { value: "", isValid: false },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue.target.value, isValid: true },
      };
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
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
    const phoneIsValid = signUpData.phone.length === 12;

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
            isValid: !nameIsValid,
          },
          password: {
            value: curInputs.password.value,
            isValid: !passwordIsValid,
          },
          confirmPassword: {
            value: curInputs.confirmPassword.value,
            isValid: !confirmPasswordIsValid,
          },
          email: {
            value: curInputs.email.value,
            isValid: !emailIsValid,
          },
          phone: {
            value: curInputs.phone.value,
            isValid: !phoneIsValid,
          },
        };
      });
      console.log(inputs);
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
        minLength={3}
      />

      <InputField
        label="Password"
        type="password"
        name="Password"
        onChange={inputChangedHandler.bind(this, "password")}
        value={inputs.password.value}
        title="Password must have 1 small , 1 capital and 1 number "
        invalid={inputs.password.isValid}
        minLength={8}
        maxLength={20}
      />
      <InputField
        label="Confirm Password"
        type="password"
        name="Confirm Password"
        onChange={inputChangedHandler.bind(this, "confirmPassword")}
        value={inputs.confirmPassword.value}
        invalid={inputs.confirmPassword.isValid}
        minLength={8}
        maxLength={20}
      />
      <InputField
        label="Email Address"
        type="email"
        name="Email Address"
        onChange={inputChangedHandler.bind(this, "email")}
        value={inputs.email.value}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        invalid={inputs.email.isValid}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="Phone Number"
        onChange={inputChangedHandler.bind(this, "phone")}
        value={inputs.phone.value}
        invalid={inputs.phone.isValid}
        maxLength={12}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <div className="btnContainer">
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </div>
    </form>
  );
};

export default AuthForm;
