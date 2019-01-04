import React, { Component } from "react";
import { WeatherLayout, MovieLayout } from "./Components/Layout";
import "./App.css";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <React.Fragment>
            <Route path="/weather" component={WeatherLayout} />
            <Route path="/movies" component={MovieLayout} />
          </React.Fragment>
        </HashRouter>
      </div>
    );
  }
}

export default App;
