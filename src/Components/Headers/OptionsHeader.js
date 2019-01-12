import React from "react";
import classes from "./Headers.module.css";
import Header from "../UI/Header";

let OptionsHeader = () => {
  return (
    <Header
      headerText={["API", "Options"]}
      subtitleText="These are the available pages"
    />
  );
};

export default OptionsHeader;
