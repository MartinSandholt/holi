import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <RadioGroup name="fruit" onChange={this.handleChange}>
                    <Radio value="first" />First level
                    <Radio value="second" />Second level
                    <Radio value="third" />Third level
                    <Radio value="four" />Fourth level
                    <Radio value="five" />Fifth level
                </RadioGroup>
            </div>
        );
    }

    handleChange(_) {
        console.log(_);
    }
}

export default Skill;