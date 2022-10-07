import React, { useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';

// --------------------------------------------------------------------------------------------------
// Stylesheets
import './CreateForm.scss';
import './Button.scss';
// --------------------------------------------------------------------------------------------------

const Form = () => {

  // --------------------------------------------------------------------------------------------------

  const {
    state,
    createTask
  } = useApplicationData();

  // --------------------------------------------------------------------------------------------------

  const [taskState, setTaskState] = useState({
    name: ''
  });

  // --------------------------------------------------------------------------------------------------

  const blankStep = { name: '', description: '' };

  // --------------------------------------------------------------------------------------------------

  const [stepState, setStepState] = useState([
    { ...blankStep }
  ]);

  // --------------------------------------------------------------------------------------------------

  const addStep = () => { // sets the state with ... of the previous state’s steps array, and a new blankStep object is added on the end
    setStepState([...stepState, { ...blankStep }]);
  }

  // --------------------------------------------------------------------------------------------------

  const handleTaskChange = (event) => setTaskState({
    ...taskState,
    [event.target.name]: [event.target.value],
  });

  // --------------------------------------------------------------------------------------------------

  const handleStepChange = (event) => {
    const updatedSteps = [...stepState]; // clone our stepState to keep renders pure
    // with the exact step and property we can set the value with event.target.value
    updatedSteps[event.target.dataset.index][event.target.className] = event.target.value // use the index data attribute to locate the index of the particular set of step inputs -- then use className to see if it's the name or description that was changed
    setStepState(updatedSteps) // update state with the updated array of steps
  };

  // --------------------------------------------------------------------------------------------------

  // const tasks = getTasks(state)
  // console.log('TASKS FROM CREATE FORM:', tasks)

  // const steps = getSteps(state)
  // console.log('STEPS FROM CREATE FORM:', steps)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('form submitted')
    createTask(taskState.name, stepState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="task">Task Name
      </label>
      <input
        type="text"
        name="name"
        id="task"
        value={taskState.name}
        onChange={handleTaskChange}
      />

      {
        stepState.map((value, index) => {
          const stepNameId = `name-${index}`;
          const descriptionId = `description-${index}`;
          return (
            <div key={`step-${index}`}>
              <label htmlFor={stepNameId}>{`${index + 1}. Step Name`}</label>
              <input
                type="text"
                name={stepNameId}
                data-index={index}
                id={stepNameId}
                className="name"
                value={stepState[index].name}
                onChange={handleStepChange}
              />
              <label htmlFor={descriptionId}>Description</label>
              <input
                type="text"
                name={descriptionId}
                data-index={index}
                id={descriptionId}
                className="description"
                value={stepState[index].description}
                onChange={handleStepChange}
              />
            </div>
          )
        })
      }
      <br></br>
      <input
        type="button" // type button on input element doesn't submit the form so we don't need a prevent default
        value="Add Step"
        className="creatTaskButton"
        onClick={addStep}
      />
      <input
        type="submit"
        value="Submit"
        className="creatTaskButton"
      />
    </form>
  );
};

export default Form;
