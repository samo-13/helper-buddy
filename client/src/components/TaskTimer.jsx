import React, { useState, useEffect, useParams } from 'react';
import useApplicationData from "../hooks/useApplicationData";
import './TaskTimer.scss';
import './Button.scss';
import axios from 'axios';
import { Timer } from "./Timer.jsx"
import { TimerControlButtons } from "./TimerControlButtons.jsx"

// useState:
// --- allows us to store state in a function based component
// --- used to store the timers time + whether the stopwatch is running or not

// useEffect:
// --- checks if the timer is running and if it is, updates the time

// PSEUDO CODE
// --- the TaskTimer startS at 0
// --- the TaskTimer can stop and reset
// --- the TaskTimer component will display the time

const TaskTimer = () => {
  const [time, setTime] = React.useState(parseInt(localStorage.getItem('duration')) || 0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  function saveDuration() {
    axios({
      method: 'put',
      url: `/api/tasks/2`,
      data: {
        duration: {time}
      },
    });
    console.log('SAVED DURATION!')
  }

  return (
    <div className="timer">
      <h4>Task Timer</h4>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button 
          onClick={() => {
            setTimerOn(false)
            localStorage.setItem('duration', time)
          }}
          >
            Stop
          </button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------------------------------
export default TaskTimer;
