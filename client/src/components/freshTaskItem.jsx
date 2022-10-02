import './Task.scss';

const FreshTaskItem = ({ name }) => {
  return (
    <div className='task'>
      <h3>{name}</h3>
    </div>
  );
};

export default FreshTaskItem;
