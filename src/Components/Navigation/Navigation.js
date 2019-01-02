import React, { Component } from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
