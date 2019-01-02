import React from "react";
import classes from "./Header.module.css";
//Weather by City and Country Around the World
let Header = props => {
  return (
    <header>
      <h1 className={classes.headerText}>
        {props.headerText[0]}
        <span className="gray-text light-weight">{props.headerText[1]}</span>
      </h1>
      <p className="subtitle blue-text">{props.subtitleText}</p>
    </header>
  );
};

export default Header;
