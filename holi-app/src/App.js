import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chart
          skillSet={this.getSkillSet()}
          userSkills={this.getUserSkills()}
          maxSkillLevel="10"
          width="500" height="500" padding="70"/>
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
