import React, {Component} from 'react';
import Form from '../../Components/Form';
import Placeholder from '../../Components/PlaceHolder';
import DarkBox from '../../Components/UI/DarkBox';
import Response from '../../Components/Response';
import { MockData } from '../../Requests/weatherData';
import { urlBuilder, apiKey } from '../../Utils';


class Weather extends Component {
    state = { 
            weatherApiURL: 'https://api.openweathermap.org/data/2.5/weather',
            weatherData: {},
            displayResults: false,
            requestHadError: false,
    }

    

    createURL = (city, country) => {
        let FullURL = urlBuilder(this.state.weatherApiURL, city, country, 'imperial', apiKey);
        this.getWeatherData(FullURL, MockData);
    };

    getWeatherData = (fullURL, RequestHandler) => {
        let _this = this;
        RequestHandler.GET(fullURL)
          .then(function (data) {
            _this.setWeatherData(data);
          })
          .catch(function (error) {
            _this.DisplayRequestError();
            console.log(error);
          });
    };

    setWeatherData = (data) => {
        this.setState({
            weatherData: {
                'Location': data.name,
                'Temperature': data.main.temp,
                'Humidity': data.main.humidity,
                'Conditions': data.weather[0].description
            },
        })
        this.shouldDisplayWeatherData();
    }

    shouldDisplayWeatherData = () => {
        this.setState((prevState) => ({displayResults: !prevState.displayResults}));
    }

    DisplayRequestError = () => {
        let _this = this;
        _this.requestHadError = true;
        setTimeout(function () {
          _this.requestHadError = false;
        }, 3500);
    };

    render() {
        return (
            <div>
                <Form getFormValues={this.createURL}/>
                <DarkBox color="black">
                    { this.state.displayResults ?
                    <Response DTO={this.state.weatherData} clicked={this.shouldDisplayWeatherData}></Response> :
                    <Placeholder></Placeholder> }
                </DarkBox>
                
            </div>
        );
    }
}

export default Weather;