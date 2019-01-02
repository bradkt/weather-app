import React, { Component } from "react";
import Weather from "../../Containers/Weather";
import { WeatherHeader } from "../Headers";
import Navigation from "../Navigation";
import classes from "./Weather.module.css";

class WeatherLayout extends Component {
  render() {
    return (
      <div className={classes.BGImage}>
        <Navigation />
        <WeatherHeader />
        <Weather />
      </div>
    );
  }
}

export default WeatherLayout;
