import React from "react";
import classes from "./Headers.module.css";
import Header from "../UI/Header";

let WeatherHeader = () => {
  return (
    <Header
      headerText={["Awesome", "Movies"]}
      subtitleText="Get Information on any Movie"
    />
  );
};

export default WeatherHeader;
