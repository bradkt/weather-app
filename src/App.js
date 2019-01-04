import React, { Component } from "react";
import { WeatherLayout, MovieLayout } from "./Components/Layout";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  componentDidMount = () => {
    console.log("public url: ", process.env.PUBLIC_URL);
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route
              path={process.env.PUBLIC_URL + "/weather"}
              component={WeatherLayout}
            />
            <Route
              path={process.env.PUBLIC_URL + "/movies"}
              component={MovieLayout}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
