import './Stepbox.scss';
import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';
import useApplicationData from '../hooks/useApplicationData';
import './Button.scss';
// import updateStep from controllers/stepController.js;

const clickData = document.querySelectorAll('button[type="submit"]');
// console.log('clickdaata', clickData);
clickData.forEach(step => {
  step.addEventListener('submit', e => {
    e.preventDefault();
    const stepData = new stepData(e.target);
    // console.log('stepdata');
  });
});

const StepItem = ({ ...step }) => {
  const { state } = useApplicationData();
  const [thisStep, setThisStep] = useState(step);
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState('');

  async function handleClick() {

    const retrievedStep = state.steps.filter(step =>
      step.task_id === thisStep.task_id &&
      step.description === thisStep.description
    );

    const stepId = retrievedStep[0].id;

    axios({
      method: 'put',
      url: `/api/steps/${stepId}`,
      data: {
        completed_at: Date.now(),
      },
    });
  }

  const markStepCompleted = event => { 
    event.currentTarget.classList.toggle('complete-step') 
    console.log('STEP MARKED COMPLETE')
  };

  const closedStep = (
    <div className='stepbox' onClick={() => setOpen(true)}>
      <h3>{step.name}</h3>
      <h3 className="step-status-todo">Completed: {step.completed_at}</h3>
    </div>
  );

  const openStep = (
    <div className='stepbox' onClick={() => setOpen(false)}>
      <h3>{step.name}</h3>
      <h4 className='expanded_step'>{step.description}</h4>
      <button type='submit' className='button' onClick={() => {
                  handleClick();
                }}>
        Done!
      </button>
    </div>
  );

  if (!open) {
    return closedStep;
  } else {
    return openStep;
  }
};

export default StepItem;
