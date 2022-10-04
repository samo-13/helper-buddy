import React, { useState,useEffect } from 'react';

// https://www.geeksforgeeks.org/reactjs-htmlfor-attribute/#:~:text=React%20provides%20us%20some%20in,for%20the%20given%20HTML%20elements

class Form extends React.Component {

  state = {
    steps: [{stepName: "", stepDescprition: ""}] // put first blank step object into our state
  }

  render() {
    let {steps} = this.state

    return (
      <form>
        <label>Task Name</label>
        <input type="text" name="taskName" id="taskName" />
        <button className="step-button">+</button>
        {
          steps.map((value, index) => {
            let stepId = `step-${index}`
            let descriptionId = `stepDescription-${index}`

            return (
              <div key={index}>
                <label htmlFor={stepId}>{`Step #${index + 1}`}</label>
                <input
                  type="text"
                  name={stepId}
                  data-id={index}
                  id={stepId}
                  className="stepName"
                />

                <label htmlFor={descriptionId}>Description</label>
                <input
                  type="text"
                  name={descriptionId}
                  data-id={index}
                  id={descriptionId}
                  className="stepDescription"
                />
              </div>
            )
          })
        }
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export { Form };
