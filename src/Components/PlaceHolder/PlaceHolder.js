import React from "react";
import DoubleArrow from "../UI/DoubleArrow";
import classes from "./PlaceHolder.module.css";

const PlaceHolder = props => (
  <section className={classes.placeholder}>
    <DoubleArrow />
    <p>{props.message}</p>
  </section>
);

export default PlaceHolder;
