// --------------------------------------------------------------------------------------------------
import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import { createTask, getTask, updateTask } from '/Users/sarahmoss/helper-buddy/routes/taskRoutes.js';

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

  // const [task, setTask] = useState([]);
  // const [steps, setSteps] = useState();
  const [taskInput, setTaskInput] = useState([{ taskName: "" }]);
  const [stepInputList, setStepInputList] = useState([{ stepName: "", stepDescription: "" }]);


  // need to have step form add steps with appropriate task id

  const HandleSubmit = event => {
    alert(`Create Task!`)
  }

  const AddStepField = event => {
    alert(`Another step field should be added!`)
  }

// handle click event of the + step button
const handleAddClick = () => {
  setStepInputList([...stepInputList, { stepName: "", stepDescription: "" }]);
};

  return (
    <div className="wrapper">
      <h2>Create your own custom task!</h2>

      <form>

          <div className="task">
            <label>Task Name</label>
            <input name="taskName" />
          </div>
      </form>

          { stepInputList.map((x, i) => {
            return (
      <form>
          <div className="step">
            <label>Step</label>
            <br></br>
            <input name="stepName" placeholder='Add step name!'/>
            <input name="stepDescription" placeholder='Add step description!'/>
          </div>


        <div className="step-buttons">
          <button onClick={handleAddClick} className="step-button">+</button>
          <button className="step-button">-</button>
        </div>
          <button className='button' onClick={HandleSubmit} type="submit">Create</button>
      </form>
            );
          })}

      <div style={{ marginTop: 30 }}>{JSON.stringify(taskInput)}</div>
      <div style={{ marginTop: 30 }}>{JSON.stringify(stepInputList)}</div>

    </div>


  )
}

export default Create;
