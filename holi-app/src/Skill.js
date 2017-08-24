import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
    }

    render() {
        const { title } = this.props;
        return (
            <div>
                <h2>{title}</h2>
                {this.renderSkills()}
            </div>
        );
    }

    handleChange(_) {
        console.log(_);
    }

    renderSkills() {
        return this.props.skills.map(s => {
            return (<div key={s.id}>
                <h3>{s.name}</h3>
                <RadioGroup name={s.name} onChange={this.handleChange}>
                    <Radio value="1" />{s.level1}
                    <Radio value="2" />{s.level2}
                    <Radio value="3" />{s.level3}
                    <Radio value="4" />{s.level4}
                    <Radio value="5" />{s.level5}
                </RadioGroup>
            </div>);
        });
    }
}

export default Skill;