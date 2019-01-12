import React, { Component } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <nav role="navigation">
        <div className={classes.menuToggle}>
          <input type="checkbox" />

          <span />
          <span />
          <span />
          <ul className={classes.menu}>
            <li>
              <NavLink to="/weather">Weather</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={this.props.logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

let mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

let mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: "LOGOUT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
