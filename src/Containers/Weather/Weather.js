import React, { Component } from "react";
import { WeatherForm } from "../../Components/Forms";
import Placeholder from "../../Components/PlaceHolder";
import DarkBox from "../../Components/UI/DarkBox";
import Response from "../../Components/Response";
import weatherAPI, { weatherDataAPIKey } from "../../Requests/weatherData";
import { MockWeatherData } from "../../Requests/fetchData";
import { weatherURLBuilder } from "../../Utils";

class Weather extends Component {
  state = {
    weatherApiURL: "https://api.openweathermap.org/data/2.5/weather",
    weatherData: {},
    displayResults: false,
    requestHadError: false,
    clearForm: false
  };

  createURL = (city, country) => {
    let FullURL = weatherURLBuilder(
      this.state.weatherApiURL,
      city,
      country,
      "imperial",
      weatherDataAPIKey
    );
    this.getWeatherData(FullURL, MockWeatherData);
  };

  getWeatherData = (fullURL, RequestHandler) => {
    let _this = this;
    RequestHandler.GET(fullURL)
      .then(function(data) {
        _this.setWeatherData(data);
      })
      .catch(function(error) {
        _this.DisplayRequestError();
        console.log(error);
      });
  };

  setWeatherData = data => {
    this.setState({
      weatherData: {
        Location: { value: data.name },
        Temperature: { value: data.main.temp },
        Humidity: { value: data.main.humidity },
        Conditions: { value: data.weather[0].description }
      }
    });
    this.shouldDisplayWeatherData();
  };

  shouldDisplayWeatherData = () => {
    this.setState(prevState => ({ displayResults: !prevState.displayResults }));
  };

  DisplayRequestError = () => {
    let _this = this;
    _this.setState({
      requestHadError: true
    });
    setTimeout(function() {
      _this.setState({
        requestHadError: false
      });
    }, 3500);
  };

  render() {
    return (
      <div>
        <WeatherForm getFormValues={this.createURL} />
        <DarkBox color="black">
          {this.state.displayResults ? (
            <Response
              DTO={this.state.weatherData}
              clicked={this.shouldDisplayWeatherData}
            />
          ) : (
            <Placeholder
              message={
                this.state.requestHadError
                  ? `This Request Had an Error`
                  : `Enter a location above to get started`
              }
            />
          )}
        </DarkBox>
      </div>
    );
  }
}

export default Weather;
