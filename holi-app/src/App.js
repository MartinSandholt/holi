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
}

export default App;
