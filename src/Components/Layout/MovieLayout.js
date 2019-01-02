import React, { Component } from "react";
import Movie from "../../Containers/Movie";
import { MovieHeader } from "../Headers";
import Navigation from "../Navigation";
import classes from "./Movie.module.css";

class MovieLayout extends Component {
  render() {
    return (
      <div className={classes.BGImage}>
        <Navigation />
        <MovieHeader />
        <Movie />
      </div>
    );
  }
}

export default MovieLayout;
