import React, { Component } from 'react';
import './SkillSet.css';
import Skill from './Skill';
import { gql, graphql } from 'react-apollo';

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
        const { data } = this.props;
        console.log(data);
        return data.allCategories ? data.allCategories.map((s, i) => {
            return <li key={s.id}>
                <Skill title={s.name} skills={s.skills} />
            </li>
        }) : null;
    }
}

const query = gql`query Categories { allCategories { id name skills { id name description level1 level2 level3 level4 level5 } } }`

export default graphql(query)(SkillSet);