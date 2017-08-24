import React, { Component } from 'react';
import './App.css';
import TopNav from './TopNav';
import PersonalCard from './PersonalCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav/>
        <PersonalCard/>
      </div>
    );
  } 
}

export default App;
