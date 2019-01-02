import React, { Component } from "react";
import InputBox from "../UI/InputBox";
import Button from "../UI/Button";
import classes from "./Forms.module.css";

class WeatherForm extends Component {
  state = {
    city: "",
    country: ""
  };

  getWeatherClickHandler = e => {
    e.preventDefault();
    this.props.getFormValues(this.state.city, this.state.country);
    this.setState(
      {
        city: "",
        country: ""
      },
      function() {
        //console.log(this.state);
      }
    );
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <div>
          <InputBox
            placeholder="City"
            type="text"
            name="city"
            hasFocus={true}
            inputVal={this.state.city}
            onChangeHandler={this.handleInputChange}
          />
        </div>
        <div>
          <InputBox
            placeholder="Country"
            type="text"
            name="country"
            inputVal={this.state.country}
            onChangeHandler={this.handleInputChange}
          />
        </div>
        <Button color="blue" clicked={this.getWeatherClickHandler}>
          Get Weather
        </Button>
      </form>
    );
  }
}

export default WeatherForm;
