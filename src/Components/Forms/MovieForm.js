import React, { Component } from "react";
import InputBox from "../UI/InputBox";
import Button from "../UI/Button";
import classes from "./Forms.module.css";

class MovieForm extends Component {
  state = {
    movie: ""
  };

  getMovieClickHandler = e => {
    e.preventDefault();
    this.props.getFormValues(this.state.movie);
    this.setState(
      {
        movie: ""
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
            placeholder="Title of Movie"
            type="text"
            name="movie"
            hasFocus={true}
            inputVal={this.state.movie}
            onChangeHandler={this.handleInputChange}
          />
        </div>
        <Button color="blue" clicked={this.getMovieClickHandler}>
          {this.props.optionToggle ? "Clear" : "Get Movie"}
        </Button>
      </form>
    );
  }
}

export default MovieForm;
