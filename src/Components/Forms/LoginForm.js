import React, { useState, useReducer } from "react";
import InputBox from "../UI/InputBox";
import Button from "../UI/Button";
import { connect } from "react-redux";
import classes from "./Forms.module.css";

function LoginForm(props) {
  let emailConfig = {
    hasFocus: true,
    inputVal: undefined,
    isValid: false,
    touched: false,
    placeholder: "Email",
    type: "email",
    name: "email"
  };

  let passwordConfig = {
    hasFocus: false,
    inputVal: undefined,
    isValid: false,
    touched: false,
    placeholder: "Password",
    type: "password",
    name: "password"
  };

  let emailHandle = useInputValidation(emailConfig);
  let passwordHandle = useInputValidation(passwordConfig);

  function loginHandler(e) {
    e.preventDefault();
    //console.log(emailHandle.inputVal, ": ", passwordHandle.inputVal);
    if (
      emailHandle.inputVal === "bradktracy@gmail.com" &&
      passwordHandle.inputVal === "123"
    ) {
      console.log("match");
      props.login();
    } else {
      console.log("fail");
    }
  }

  return (
    <form>
      <h3>Please Login</h3>
      <InputBox {...emailHandle} />
      <InputBox {...passwordHandle} />
      <Button color="blue" clicked={loginHandler}>
        Log In
      </Button>
    </form>
  );
}

let mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

let mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch({ type: "LOGIN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

function useInputValidation(initVal) {
  let [value, setValue] = useState(initVal);

  function handleChange(e) {
    const val = e.target.value;

    setValue({
      ...value,
      touched: true,
      inputVal: val
    });
  }
  return {
    ...value,
    onChangeHandler: handleChange
  };
}
