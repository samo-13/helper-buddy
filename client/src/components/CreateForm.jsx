import React, { useState, useEffect } from 'react';

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

  const [taskState, setTaskState] = useState({
    name: ''
  });

  const handleTaskChange = (event) => setTaskState({
    ...taskState,
    [event.target.name]: [event.target.value],
  });

  const blankStep = { name: '', description: '' };

  const [stepState, setStepState] = useState([
    {...blankStep}
  ]);

  const addStep = () => { // sets the state with ... of the previous state’s steps array, and a new blankStep object is added on the end
    setStepState([...stepState, {...blankStep}]);
  }

  return (
    <form>
      <label
        htmlFor="task">Task Name
      </label>
      <input
        type="text"
        name="task"
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
              />
              <label htmlFor={descriptionId}>Description</label>
              <input
                type="text"
                name={descriptionId}
                data-index={index}
                id={descriptionId}
                className="description"
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
