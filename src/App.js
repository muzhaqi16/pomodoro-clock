import React from 'react';
import DisplayTimer from './components/DisplayTimer';
import TimeButton from './components/TimeButton';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <DisplayTimer />
      <div className="handler-buttons">
        <TimeButton type="timer" minutes={25} />
        <TimeButton type="text" text="start" />
      </div>
    </div>
  );
}

export default App;
