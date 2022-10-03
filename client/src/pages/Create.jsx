import React, { useState } from 'react';
// styles
import './Create.scss';
import '../components/Button.scss';

const Create = () => {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have created a new task.')
  }

  const [inputField, setInputField] = useState([
    { step: '' },
  ]);

  const addStepField = () => {
    setInputField([...inputField, { step: '' }])
  }

  return (
    <div className="wrapper">
      <h1>Create your own custom task!</h1>
      <form>
        <fieldset>
          <div className="task">
            <label>
              Task Name
              <input name="task-name" />
            </label>
          </div>

          <div className="step">
            <label>
              Step
            </label>
            <input name="step-description" />
          </div>
        </fieldset>
        <div className="step-buttons">
          <button onClick={addStepField} className="step-button">+</button>
          <button className="step-button">-</button>
        </div>
          <button className='button' onClick={handleSubmit} type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create;
