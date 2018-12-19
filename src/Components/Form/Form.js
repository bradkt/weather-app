import React, { Component } from 'react';
import InputBox from '../UI/InputBox';
import Button from '../UI/Button';
import classes from './Form.module.css';
import reactDOM from 'react-dom';


class Form extends Component {

    state = { 
            city: '',
            country: ''
    };
    
    componentDidMount = () => {
        
    }

    focusInput = (component) => {
        if (component) {
            console.log(component);
            reactDOM.findDOMNode(component).focus();
        }
      };

    getWeatherClickHandler = (e) => {
        e.preventDefault();
        this.props.getFormValues(this.state.city, this.state.country)
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <form>
                <div>
                    <InputBox placeholder='City' type='text' name='city' 
                    ref="cityRef"
                    value={this.state.city} 
                    onChangeHandler={this.handleInputChange} 
                    autoFocus></InputBox>
                </div>
                <div>
                    <InputBox placeholder='Country' type='text' name='country' value={this.state.country} onChangeHandler={this.handleInputChange}></InputBox>
                </div>
                <Button color='blue' clicked={this.getWeatherClickHandler}>Get Weather</Button>
            </form>
            
        );
    }
}

export default Form;