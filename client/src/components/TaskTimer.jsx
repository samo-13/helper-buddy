import React, { useState, useEffect, useParams } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import './TaskTimer.scss';
import './Button.scss';
import axios from 'axios';

// useState:
// --- allows us to store state in a function based component
// --- used to store the timers time + whether the stopwatch is running or not
// useEffect:
// --- checks if the timer is running and if it is, updates the time
// PSEUDO CODE
// --- the TaskTimer startS at 0
// --- the TaskTimer can stop and reset
// --- the TaskTimer component will display the time

const TaskTimer = (props) => {
  const [time, setTime] = React.useState(parseInt(localStorage.getItem('duration')) || 0);
  const [timerOn, setTimerOn] = React.useState(false);
  const {state} = useApplicationData();

  console.log('STATE STATE STATE:', state)

  console.log('THIS PROPS:', props)
  console.log('THIS PROPS ID:', props.taskId)
  const id = props.taskId
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

  async function saveDuration(time) {
    axios({
      method: 'put',
      url: `http://localhost:8080/api/tasks/${id}`,
      data: {
      total_time: `${time}`
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
          <button className="start-timer-button" onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button className="pause-timer-button"
          onClick={() => {
            setTimerOn(false)
            saveDuration(time)
          }}
          >
            Pause
          </button>}
        {!timerOn && time > 0 && (
          <button className="reset-timer-button" onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button className="resume-timer-button" onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
};
// --------------------------------------------------------------------------------------------------
export default TaskTimer;