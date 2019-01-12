import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import classes from "./Options.module.css";

class Options extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <h2>Your Options</h2>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Options;
