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
  const [time, setTime] = React.useState(props.realTime || 0);
  const [timerOn, setTimerOn] = React.useState(false);
  const {state} = useApplicationData();
  const id = props.taskId;
  const task = props.task;
  let realTime = props.realTime;
  // setTime(props.realTime);

  // console.log('STATE STATE:', state);
  // console.log('HELLLLLLLLLO:', task)
  
// function getTime() {
//   if (props.task.total_time === null)  {
//     time = 0
//     return time;
//   } else {
//     time = props.task.total_time
//     return time;
//   }
// }

// console.log('TIME:', time);
// getTime()
  
  // console.log('STATE STATE STATE:', state)
  // console.log('THIS PROPS:', props)
  // console.log('THIS PROPS ID:', props.taskId)

// --------------------------------------------------------------------------------------------------

  React.useEffect(() => {
    let interval = null;

    // const totalTime = task.total_time;
    // setTime(props.realTime)
    // setTime(savedTime)
    console.log('TIME TIME TIME:', time)


    if (timerOn) {
      interval = setInterval(() => {
        // console.log('INTERVAL:', interval)
        setTime((realTime) => realTime + 10);
      }, 10);

    // } else if (!timerOn) {
    //   clearInterval(interval);
    // }

    return () => clearInterval(interval);
  }, [timerOn]);

// --------------------------------------------------------------------------------------------------

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
 
  // --------------------------------------------------------------------------------------------------
  let milliseconds = ("0" + ((realTime / 10) % 100)).slice(-2)
  let seconds = ('0' + (Math.floor(realTime / 1000) % 60)).slice(-2);
  let minutes = ('0' + (Math.floor(realTime / 60000) % 60)).slice(-2);
  let hours = ('0' + Math.floor(realTime / 3600000)).slice(-2);
  // --------------------------------------------------------------------------------------------------
  

  return (
    <div className="timer">
      <h4>Task Timer</h4>
      <div id="display">
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>
      </div>

      <div id="buttons">

        {!timerOn && time === 0 && (
          <button 
            onClick={() => setTimerOn(true)}
          >
            Start
          </button>
        )}

        {timerOn && 
          <button 
            onClick={() => {
              setTimerOn(false)
              saveDuration(time)
            }}
            >
              Stop
          </button>
        }

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
