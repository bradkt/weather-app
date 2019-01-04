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
              <NavLink to={process.env.PUBLIC_URL + "/weather"}>
                Weather
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/movies"}>Movies</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
