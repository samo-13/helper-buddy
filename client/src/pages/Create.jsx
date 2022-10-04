// --------------------------------------------------------------------------------------------------
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Form } from '../components/CreateForm.jsx'
// import { createTask, getTask, updateTask } from '/Users/sarahmoss/helper-buddy/routes/taskRoutes.js'; // this gives an error bc it's outside src
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
  // need to have step form add steps with appropriate task id

  // const [task, setTask] = useState([]);
  // const [steps, setSteps] = useState();

  // const [taskInput, setTaskInput] = useState([
  //   { taskName: "" }
  // ]);

  // // values // input.taskName

  // const [stepInputFields, setStepInputFields] = useState([
  //   { stepName: "", stepDescription: "" }
  // ]);

  // // values // input.stepName // input.stepDescription

  // // submit button on the form as a whole
  // const HandleSubmit = event => {
  //   alert(`Create Task!`)
  // }

  // // handle click event of the + step button
  // const handleAddClick = event => {
  //   setStepInputFields([...stepInputFields, { stepName: "", stepDescription: "" }]);
  // };

  // // when the + button is clicked, create an object push it to the stepInputFields state to create a new input field
  // const addStepFields = () => {
  //   let newStepField = { stepName: "", stepDescription: "" }
  //   // set this newStepField inside the stepInputFields state
  //   setStepInputFields([...stepInputFields, newStepField]) // also setting the existing stepInputFields using the spread operator
  // }

  // // runs when you type something in the input fields

  // const handleFormChange = (index, event) => { // index = index of the array and event = the data typed in the input field
  //   // set the states in the stepInputFields state
  //   let data = [...stepInputFields]; // store stepInputFields state into a variable called data using the spread operator.
  //   data[index][event.target.stepName] = event.target.stepDescription; // target the index of the data variable using the index parameter + the name of the property
  //   setStepInputFields(data); // store this data back inside the stepInputFields array using the setStepInputFields method
  // }


  return (

    <div className="wrapper">
      <h2>Create your own custom task!</h2>
      <Form />
    </div>
  )
}

export default Create;
