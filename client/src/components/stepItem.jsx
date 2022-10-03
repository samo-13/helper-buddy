import './Taskbox.scss';

const StepItem = ({ name, description }) => {
  return (
    <div className='taskbox'>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h4>Average time to completion:</h4>
    </div> 
  );
};

export default StepItem;