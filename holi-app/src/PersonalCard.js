import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Chart from './Chart';
import './PersonalCard.css';

class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="PersonalCard">
                <PersonalInfo/>
                <Chart 
                    skillSet={this.getSkillSet()}
                    userSkills={this.getUserSkills()}
                    maxSkillLevel="10"
                    width="320" height="320" padding="70"/>
            </div>
        );
    }

    getSkillSet() {
        return [
            { key: 'resilience', label: 'Resilience' },
            { key: 'strength', label: 'Strength' },
            { key: 'adaptability', label: 'Adaptability' },
            { key: 'creativity', label: 'Creativity' },
            { key: 'openness', label: 'Open to Change' },
            { key: 'confidence', label: 'Confidence' }
        ];
    }
    
    getUserSkills() {
        return {
            resilience: 6,
            strength: 10,
            adaptability: 6,
            creativity: 7,
            openness: 0,
            confidence: 10,
        };
    }
}

export default PersonalCard;