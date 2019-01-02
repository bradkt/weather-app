import React from "react";
import classes from "./DarkBox.module.css";

let darkBox = props => {
  return (
    <div
      className={[classes.DarkBox, classes["DarkBox-" + props.color]].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default darkBox;
