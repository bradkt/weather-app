import React from "react";
import classes from "./Headers.module.css";
import Header from "../UI/Header";

let WeatherHeader = () => {
  return (
    <Header
      headerText={["World", "Weather"]}
      subtitleText="Weather by City and Country Around the World"
    />
  );
};

export default WeatherHeader;
