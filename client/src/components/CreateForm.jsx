import React, { useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import { useNavigate, Link } from "react-router-dom";
// --------------------------------------------------------------------------------------------------
// Stylesheets
import './Button.scss';
import '../pages/Create.scss';
// --------------------------------------------------------------------------------------------------

const Form = () => {
  // --------------------------------------------------------------------------------------------------
  // Help link the form submit button to the in-progress tasks view OR the task itself
  const navigate = useNavigate();
  // --------------------------------------------------------------------------------------------------
  const { state, createTask } = useApplicationData();
  // --------------------------------------------------------------------------------------------------
  const [taskState, setTaskState] = useState({
    name: '',
  });
  // --------------------------------------------------------------------------------------------------
  const blankStep = { name: '', description: '' };
  // --------------------------------------------------------------------------------------------------
  const [stepState, setStepState] = useState([{ ...blankStep }]);
  // --------------------------------------------------------------------------------------------------
  const addStep = () => {
    // sets the state with ... of the previous state’s steps array, and a new blankStep object is added on the end
    setStepState([...stepState, { ...blankStep }]);
  };
  // --------------------------------------------------------------------------------------------------
  const handleTaskChange = event =>
    setTaskState({
      ...taskState,
      [event.target.name]: [event.target.value],
    });
  // --------------------------------------------------------------------------------------------------
  const handleStepChange = event => {
    const updatedSteps = [...stepState]; // clone our stepState to keep renders pure
    // with the step + property, set the value with event.target.value
    updatedSteps[event.target.dataset.index][event.target.className] =
      event.target.value; // use the index data attribute to locate the index of the set of step inputs -- then use className to see if it's the name or description that was changed
    setStepState(updatedSteps); // update state with the updated array of steps
  };
  // --------------------------------------------------------------------------------------------------
  const handleSubmit = event => {
    event.preventDefault();

    // clear form after submit
    setTaskState({
      name: '',
    });
    setStepState([{ ...blankStep }]);

    createTask(taskState.name, stepState);
    navigate(`/`) // navigates us back to the home view to see our task has been created
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="top-create-form">
      <label htmlFor='task'>Task name</label>
      <input
        type='text'
        name='name'
        id='task'
        value={taskState.name}
        onChange={handleTaskChange}
      />

      {stepState.map((value, index) => {
        const stepNameId = `name-${index}`;
        const descriptionId = `description-${index}`;
        return (

          <div id="create-form-step-section" className="top-create-form" key={`step-${index}`}>
            <label htmlFor={stepNameId}>{`${index + 1}. Step name`}</label>
            <input
              type='text'
              name={stepNameId}
              data-index={index}
              id={stepNameId}
              className='name'
              value={stepState[index].name}
              onChange={handleStepChange}
            />
            <label htmlFor={descriptionId}>Step description</label>
            <input
              type='text'
              name={descriptionId}
              data-index={index}
              id={descriptionId}
              className='description'
              value={stepState[index].description}
              onChange={handleStepChange}
            />
          </div>
        );
      })}
      </div>
      <br></br>
      <div className="create-form-buttons">
        <input
          type='button' // type button on input element doesn't submit the form so we don't need a prevent default
          value='Add Step'
          className='createTaskButton'
          onClick={addStep}
        />
        <input type='submit' value='Submit' className='createTaskButton' id="submit-button"/>
      </div>
    </form>
  );
};

export default Form;
