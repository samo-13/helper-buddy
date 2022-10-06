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

  const [stepState, setStepState] = useState([
    { name: '', description: ''},
  ]);

  return (
    <form>
      <label htmlFor="task">Task Name</label>
      <input type="text" name="task" id="task" />
      <input type="button" value="Add Step" />

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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
