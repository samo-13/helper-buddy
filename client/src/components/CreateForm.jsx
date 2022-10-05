import React, { useState, useEffect } from 'react';

// https://www.geeksforgeeks.org/reactjs-htmlfor-attribute/#:~:text=React%20provides%20us%20some%20in,for%20the%20given%20HTML%20elements


const Form = () => {
  return (
    <form>
      <label htmlFor="task">Task Name</label>
      <input type="text" name="task" id="task" />
      <input type="button" value="Add Step" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export { Form };
