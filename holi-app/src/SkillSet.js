import React, { Component } from 'react';
import './SkillSet.css';
import Skill from './Skill';

class SkillSet extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <ul className="skill-set">
                {this.getCategories()}
            </ul>
        );
    }

    getCategories() {
        return this.props.categories.map((s, i) => {
            return <li key={s.key}>
                <Skill title={s.label} skills={this.props.skills} />
            </li>
        });
    }
}

export default SkillSet;