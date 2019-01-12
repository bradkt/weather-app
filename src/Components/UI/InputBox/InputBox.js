import React, { Component } from "react";
import classes from "./InputBox.module.css";

class InputBox extends Component {
  render() {
    return (
      <div>
        <input
          autoComplete={this.props.doAutocomplete}
          autoFocus={this.props.hasFocus}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
          name={this.props.name}
          value={this.props.inputVal}
        />
      </div>
    );
  }
}

export default InputBox;
