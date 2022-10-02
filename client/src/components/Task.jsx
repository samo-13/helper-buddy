import './Task.scss';

const Task = ({ name }) => {
  return (
    <div className='task'>
      <h3 className='task__name'>{name}</h3>
    </div>
  );
};

export default Task;
