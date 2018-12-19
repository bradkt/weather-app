import React, { Component } from "react";
import Weather from '../../Containers/Weather';
import classes from "./Layout.module.css";
import Header from '../Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Weather />
      </div>
    );
  }
}

export default Layout;
