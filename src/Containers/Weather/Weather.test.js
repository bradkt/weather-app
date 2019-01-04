import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import Weather from "./Weather";
import { MockWeatherData } from "../../Requests/fetchData";
import { fakeWeatherData } from "../../Requests/weatherData";
import Response from "../../Components/Response";

configure({ adapter: new Adapter() });

describe("Weather.js", () => {
  let WeatherWrap;

  beforeEach(() => {
    WeatherWrap = shallow(<Weather />);
  });

  it("shouldDisplayResults should be false", () => {
    // Arrange

    // Act

    // Assert
    expect(WeatherWrap.state().displayResults).toBe(false);
  });

  it("requestHadError should be false", () => {
    // Arrange

    // Act

    // Assert
    expect(WeatherWrap.state().requestHadError).toBe(false);
  });

  it("clearForm should be false", () => {
    // Arrange

    // Act

    // Assert
    expect(WeatherWrap.state().clearForm).toBe(false);
  });

  it("should create a proper URL", () => {
    // Arrange

    // Act
    let FullURL = WeatherWrap.instance().createURL("Austin", "USA");
    // Assert
    expect(FullURL).toBe(
      "https://api.openweathermap.org/data/2.5/weather?q=Austin,USA&units=imperial&appid=7b74044f257192db0e510ee45df33d0b"
    );
  });

  it("should set the proper weather data after api request", () => {
    // Arrange

    // Act
    WeatherWrap.instance().setWeatherData(fakeWeatherData);

    // Assert
    expect(WeatherWrap.state().weatherData).toEqual({
      Conditions: { value: "clear sky" },
      Humidity: { value: 48 },
      Location: { value: "Columbus" },
      Temperature: { value: 285.82 }
    });
  });

  it("should be able to fetch data", () => {
    // Arrange

    // Act
    let result = WeatherWrap.instance().getWeatherData(
      "some-url",
      MockWeatherData
    );
    // Assert
    setTimeout(() => {
      expect(result).toEqual({
        Conditions: { value: "clear sky" },
        Humidity: { value: 48 },
        Location: { value: "Columbus" },
        Temperature: { value: 285.82 }
      });
    }, 900);
  });

  it("should be display the results page if display data is true", () => {
    // Arrange

    // Act
    expect(WeatherWrap.find(Response).length).toBe(0);

    WeatherWrap.setState({ displayResults: true });
    // Assert
    expect(WeatherWrap.find(Response).length).toBe(1);
  });

  it("calling shouldDisplayWeatherData should toggle bool value", () => {
    // Arrange

    // Act
    WeatherWrap.instance().shouldDisplayWeatherData();
    // Assert
    expect(WeatherWrap.state().displayResults).toBe(true);
  });
});
