import React, { useState, useEffect } from 'react';

// https://www.geeksforgeeks.org/reactjs-htmlfor-attribute/#:~:text=React%20provides%20us%20some%20in,for%20the%20given%20HTML%20elements


class Form extends React.Component {

  state = {
    steps: [{name: "", descrption: ""}] // put first blank step object into our state
  }

  addStep = (event) => { // sets the state with ... of the previous state’s steps array with a new blank step object added on the end. This should re-render our component, and the form will iterate over the new length of the array, to give us a new pair of inputs.
    this.setState((previousState) => ({
      steps: [...previousState.steps, {name:"", description:""}],
    }));
  }

  removeStep(index) {
    let steps = this.state.steps;
    steps.splice(index, 1);
    this.setState({ steps });
  }

  handleSubmit = (event) => { // stops form from automatically reloading the page
    event.preventDefault()
  }

  handleChange = (event) => { // Hhndling our dynamic inputs
    if (["name", "description"].includes(event.target.className)) { // check if the event’s class matches the dynamic inputs
      let steps = [...this.state.steps] // if sos, make a copy of our steps array of objects using the spread operator
      steps[event.target.database.id][event.target.className] = event.target.value // uses event.target’s dataset to match the input to its corresponding object -- then use the event.target’s classname to grab either the step object’s name or description value -- e.g., steps[0][name] = typed text
      this.setState({ steps }, () => console.log(this.state.steps)) // with our copied list mutated to reflect the new input, we use setState to save the change to our state and trigger a re-render of our form.
    } else {
      // event.target.value grabs the input value that the user types into
      this.setState({ [event.target.name]: event.target.value }) // using [] to dynamically match our state using each input’s name attribute (Computed Property Names)
    } // https://medium.com/@zacjones/handle-multiple-inputs-in-react-with-es6-computed-property-name-e3d41861ae46
  } // e.g., our taskName input has a name of task, which means our setState translates to task: whatever-was-typed

  render() {
    let { task, steps } = this.state
    console.log('THIS STATE:', this.state)

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <label>Task Name</label>
        <input type="text" name="taskName" id="taskName" />
        {
          steps.map((value, index) => {
            let stepId = `step-${index}`
            let descriptionId = `description-${index}`

            return (
              <div key={index}>
                <label htmlFor={stepId}>{`Step #${index + 1}`}</label>
                <input
                  type="text"
                  name={stepId}
                  data-id={index}
                  id={stepId}
                  className="name"
                  placeholder="Step name..."
                />
                <label htmlFor={descriptionId}>Description</label>
                <input
                  type="text"
                  name={descriptionId}
                  data-id={index}
                  id={descriptionId}
                  className="description"
                  placeholder="Step description..."
                />
              </div>
            )
          })
        }
        <br></br>
        <button onClick={this.addStep} className="step-button">+ Step</button>
        {/* <button onClick={() => this.removeStep(index)} className="step-button">- Step</button> */}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export { Form };
