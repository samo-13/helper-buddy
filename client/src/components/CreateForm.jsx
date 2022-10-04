import React, { useState, useEffect } from 'react';

// https://www.geeksforgeeks.org/reactjs-htmlfor-attribute/#:~:text=React%20provides%20us%20some%20in,for%20the%20given%20HTML%20elements


class Form extends React.Component {

  state = {
    steps: [{name: "", stepDescrption: ""}] // put first blank step object into our state
  }

  addStep = (event) => { // sets the state with ... of the previous state’s steps array with a new blank step object added on the end. This should re-render our component, and the form will iterate over the new length of the array, to give us a new pair of inputs.
    this.setState((previousState) => ({
      steps: [...previousState.steps, {name:"", description:""}],
    }));
  }

  removeStep = () => {
    alert('Remove Step!!')
    };

  handleSubmit = (event) => { // stops form from automatically reloading the page
    event.preventDefault()
  }

  render() {
    let {steps} = this.state
    console.log('THIS STATE:', this.state)

    return (
      <form onSubmit={this.handleSubmit}>
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
        <button onClick={this.removeStep} className="step-button">- Step</button>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export { Form };
