import React, { Component } from "react";
import DoubleArrow from '../UI/DoubleArrow';
import classes from "./PlaceHolder.module.css";

class PlaceHolder extends Component {
  render() {
    return (
      <section className={classes.placeholder}>
          <DoubleArrow />
          <p>Enter a location above to get started.</p>
      </section>
    );
  }
}

export default PlaceHolder;