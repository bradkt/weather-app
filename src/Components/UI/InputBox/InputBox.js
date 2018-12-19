import React, { Component } from 'react';
import classes from './InputBox.module.css'

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <input
                autoComplete={this.props.doAutocomplete} 
                type={this.props.type} 
                placeholder={this.props.placeholder} 
                onChange={this.props.onChangeHandler}
                name={this.props.name}
                required />
            </div>
        );
    }
}

export default InputBox;