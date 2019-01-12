import React, { Component, useReducer } from "react";
import "./App.css";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import { WeatherLayout, MovieLayout, OptionsLayout } from "./Components/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <>
            <Route path="/weather" component={WeatherLayout} />
            <Route path="/movies" component={MovieLayout} />
            <Route exact path="/" component={OptionsLayout} />
          </>
        </HashRouter>
      </div>
    );
  }
}

export default App;
