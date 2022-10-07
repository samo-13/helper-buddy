import React, { useState } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import { getTasks, getSteps } from '../helpers/selectors'
import { createTask } from '../hooks/useApplicationData';

// https://www.geeksforgeeks.org/reactjs-htmlfor-attribute/#:~:text=React%20provides%20us%20some%20in,for%20the%20given%20HTML%20elements

// --------------------------------------------------------------------------------------------------
// PSEUDO CODE
// --------------------------------------------------------------------------------------------------

// --- Use arrays for dynamic inputs
// --- Have an array of step objects in our state.
// --- Each object will have a name and description value.
// --- Our Form will iterate over this list and create two new inputs for the name and description.
// --- When we click “Add Step”, we’ll add a new object to our array.
// --- Since this will change our state, it will trigger a re-render.
// --- Then, our form will iterate over this new list of steps, and add another pair of inputs.

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
    {...blankStep}
  ]);

  // --------------------------------------------------------------------------------------------------

  const addStep = () => { // sets the state with ... of the previous state’s steps array, and a new blankStep object is added on the end
    setStepState([...stepState, {...blankStep}]);
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

  const handleSubmit =(e) => {
    e.preventDefault()

    console.log('form submitted')
    createTask(taskState.name)
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
              <label htmlFor={stepNameId}>{`Step #${index + 1}`}</label>
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
      <input
        type="button" // type button on input element doesn't submit the form so we don't need a prevent default
        value="Add Step"
        onClick={addStep}
      />
      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default Form;
