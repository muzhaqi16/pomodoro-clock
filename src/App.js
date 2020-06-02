import React, { useState } from 'react';
import DisplayTimer from './components/DisplayTimer';
import TimeButton from './components/TimeButton';

import './App.css';

function App() {
  const [worktime, setWorktime] = useState(2);// <-- Changes this to 25 when ready for deployment
  const [breaktime, setBreaktime] = useState(5);// <-- Changes this to 5 when ready for deployment
  const [isActive, setIsActive] = useState(false);

  const reset = () => {
    setWorktime(25);
    setIsActive(false);
    setBreaktime(5)
  }

  return (
    <div className="main-container">
      <button id="reset" onClick={reset}>Reset</button>
      <DisplayTimer time={worktime} break={breaktime} status={isActive} />
      <div className="handler-buttons">

        {/* Session length button */}
        <TimeButton data={{ type: "timer", lengthID: "session-length", label: "Session Length", id: "session-label", dec: "session-decrement", inc: "session-increment" }} minutes={worktime} onClick={setWorktime} />

        {/*Start/ Pause button  */}
        <TimeButton data={{ type: "text", label: "", id: "timer-label" }} status={isActive} text="start" onClick={setIsActive} />

        {/* Break length button */}
        <TimeButton data={{ type: "timer", lengthID: "break-length", label: "Break Length", id: "break-label", dec: "break-decrement", inc: "break-increment" }} minutes={breaktime} onClick={setBreaktime} />
      </div>
    </div>
  );
}

export default App;
