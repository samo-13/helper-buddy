// import React, { useState, useEffect, useParams, useRef } from 'react';
// import useApplicationData from '../hooks/useApplicationData';
// import './TaskTimer.scss';
// import './Button.scss';
// import useTimer from '../hooks/useTimer.jsx';
// import axios from 'axios';

// useState:
// --- allows us to store state in a function based component
// --- used to store the timers time + whether the stopwatch is running or not

// useEffect:
// --- checks if the timer is running and if it is, updates the time

// PSEUDO CODE
// --- the TaskTimer startS at 0
// --- the TaskTimer can stop and reset
// --- the TaskTimer component will display the time

// const TaskTimer = (props) => {
//   const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, formatTime } = useTimer(0)

//   return (
//     <div className="app">
//       <h3>Timer</h3>
//       <div className='stopwatch-card'>
//         <p>{formatTime(timer)}</p>
//         <div className='buttons'>
//           {
//             !isActive && !isPaused ?
//               <button onClick={handleStart}>Start</button>
//               : (
//                 isPaused ? <button onClick={handlePause}>Pause</button> :
//                   <button onClick={handleResume}>Resume</button>
//               )
//           }
//           <button onClick={handleReset} disabled={!isActive}>Reset</button>
//         </div>
//       </div>
//     </div>
//   ); 
// }

//   export default TaskTimer;

import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils/index.js';

const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return (
    <div className="app">
      <h3>Task Timer</h3>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
  );
}

export default Timer;