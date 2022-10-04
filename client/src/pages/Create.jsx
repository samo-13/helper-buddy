// --------------------------------------------------------------------------------------------------
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { createTask, getTask, updateTask } from '/Users/sarahmoss/helper-buddy/routes/taskRoutes.js';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// --------------------------------------------------------------------------------------------------
// Style links
import './Create.scss';
import '../components/Button.scss';
import './Layout.scss';
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// INSERT INTO steps (task_id, name, description) VALUES
// (1, 'Let''s get everything we need:', 'Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?');
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// INSERT INTO tasks (name) VALUES ('Wash the dishes');
// --------------------------------------------------------------------------------------------------

const Create = () => {

  const [tasks, setTasks] = useState([]);
  const [steps, setSteps] = useState();

  const HandleSubmit = event => {
    createTask('Test task name')
  }

  const addStepField = event => {
    alert('Another step field should be added!')
  }

  // console.log('STATE:', state);

  return (
    <div className="wrapper">
      <h2>Create your own custom task!</h2>

      <form>
        <fieldset>
          <div className="task">
            <label>
              Task Name
            </label>
            <input name="name" />
          </div>

          <div className="step">
            <label>
              Step
            </label>
            <br></br>
            <input name="step-description" />
          </div>
        </fieldset>

        <div className="step-buttons">
          <button onClick={addStepField} className="step-button">+</button>
          <button className="step-button">-</button>
        </div>
          <button className='button' onClick={HandleSubmit} type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create;
