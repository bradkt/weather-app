import React, { Component } from "react";
import { WeatherLayout, MovieLayout } from "./Components/Layout";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/weather-app">
          <React.Fragment>
            <Route path="/weather" component={WeatherLayout} />
            <Route path="/movies" component={MovieLayout} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
