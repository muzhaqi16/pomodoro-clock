import React, { useState } from 'react';
import DisplayTimer from './components/DisplayTimer';
import TimeButton from './components/TimeButton';

import './App.css';

function App() {
  const [worktime, setWorktime] = useState(25);
  const [breaktime, setBreaktime] = useState(5);
  const [isActive, setIsActive] = useState(false);
  console.log(worktime, breaktime, isActive)
  return (
    <div className="main-container">
      <DisplayTimer time={worktime} status={isActive} />
      <div className="handler-buttons">
        <TimeButton type="timer" minutes={worktime} onClick={setWorktime} />
        <TimeButton type="text" text="start" onClick={setIsActive} />
        <TimeButton type="timer" minutes={breaktime} onClick={setBreaktime} />
      </div>
    </div>
  );
}

export default App;
