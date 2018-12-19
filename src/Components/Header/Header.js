import React from "react";
import classes from "./Header.module.css";

let Header = () => {
  return (
    <header>
      <h1 className={classes.headerText}>World<span className="gray-text light-weight">Weather</span></h1>
      <p className="subtitle blue-text">Weather by City and Country Around the World</p>
    </header>
  );
};

export default Header;
