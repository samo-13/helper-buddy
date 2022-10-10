// --------------------------------------------------------------------------------------------------
import React, { useState,useEffect } from 'react';
import Form from '../components/CreateForm.jsx';
import useApplicationData from '../hooks/useApplicationData.jsx';
// --------------------------------------------------------------------------------------------------
// Style links
import './Create.scss';
import '../components/Button.scss';
import './Layout.scss';
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// INSERT INTO steps (task_id, name, description) VALUES
// (1, 'Let''s get everything we need:', 'Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?');
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// INSERT INTO tasks (name) VALUES ('Wash the dishes');
// --------------------------------------------------------------------------------------------------

const Create = (props) => {

  const {
    state,
    createTask
  } = useApplicationData();

  return (
    <div className="wrapper">
      <h2>Create your own custom task!</h2>
      <br></br>
      <Form />
    </div>
  )
}

export default Create;
