import React, { Component, useReducer } from "react";
import Options from "../../Containers/Options";
import { OptionsHeader } from "../Headers";
import Navigation from "../Navigation";
import classes from "./Movie.module.css";
import LoginForm from "../Forms/LoginForm";
import { connect } from "react-redux";

class OptionsLayout extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <LoginForm />;
    } else {
      return (
        <>
          <Navigation />
          <OptionsHeader />
          <Options />
        </>
      );
    }
  }
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
)(OptionsLayout);
