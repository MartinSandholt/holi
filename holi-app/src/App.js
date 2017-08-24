import React, { Component } from 'react';
import './App.css';
import TopNav from './TopNav';
import PersonalCard from './PersonalCard';
import SkillSet from './SkillSet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <PersonalCard/>
        <SkillSet categories={this.getSkillSet()} skills={this.getUserSkills()}/>
      </div>
    );
  }

  getSkillSet() {
    return [
      {key: 'resilience', label: 'Resilience'},
      {key: 'strength', label: 'Strength'},
      {key: 'adaptability', label: 'Adaptability'},
      {key: 'creativity', label: 'Creativity'},
      {key: 'openness', label: 'Open to Change'},
      {key: 'confidence', label: 'Confidence'}
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

export default App;
