import React, { Component } from "react";
import "./TaskTimer.scss";
import "./Button.scss";


// useState:
// --- allows us to store state in a function based component
// --- used to store the timers time + whether the stopwatch is running or not

// useEffect:
// --- checks if the timer is running and if it is, updates the time

// PSEUDO CODE
// --- the TaskTimer startS at 0
// --- the TaskTimer can stop and reset
// --- the TaskTimer component will display the time

class TaskTimer extends Component {
  state = {
    timerOn: false, // boolean if timer is on or off
    timerStart: 0, // the Unix Epoch (ms after 1970) time when the timer was started (or the past projected start time if the timer is resumed)
    timerTotalTime: 0 // total time (ms) that the timer has been running
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTotalTime: this.state.timerTotalTime,
      timerStart: Date.now() - this.state.timerTotalTime
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTotalTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => { // returns the timerStart and timerTotalTime back to 0
    this.setState({
      timerStart: 0,
      timerTotalTime: 0
    });
  };

  render() {
    const { timerTotalTime } = this.state;
    // format times to display as 2 digits by concatenating a “0” on the front then slicing off the end if its more than 2 digits long
    let centiseconds = ("0" + (Math.floor(timerTotalTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTotalTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTotalTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTotalTime / 3600000)).slice(-2);

    return (
      <div className="timer">
        <div className="timer-header">Task Timer</div>
        <div className="timer-display">
          <div className="timer-block">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </div>

          {this.state.timerOn === false && this.state.timerTotalTime === 0 && (
            <button className="timerbuttons" onClick={this.startTimer}>Start</button>
          )}
          {this.state.timerOn === true && (
            <button className="timerbuttons" onClick={this.stopTimer}>Stop</button>
          )}
          {this.state.timerOn === false && this.state.timerTotalTime > 0 && (
            <button className="timerbuttons" onClick={this.startTimer}>Resume</button>
          )}
          {this.state.timerOn === false && this.state.timerTotalTime > 0 && (
            <button className="timerbuttons" onClick={this.resetTimer}>Restart</button>
          )}
        </div>
      </div>
    );
  }
}

// --------------------------------------------------------------------------------------------------
export default TaskTimer;
