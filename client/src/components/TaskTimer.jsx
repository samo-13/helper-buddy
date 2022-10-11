import React, { useState, useEffect } from 'react';
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

function TaskTimer() {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <TimerControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        // handleReset={handleReset}
      />
    </div>
  );
}

// --------------------------------------------------------------------------------------------------
export default TaskTimer;
