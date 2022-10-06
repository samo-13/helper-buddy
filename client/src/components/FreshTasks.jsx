import FreshTaskItem from './FreshTaskItem';

const FreshTasks = ({ tasks }) => {
  const steps = tasks[0].steps;
  return (
    <div>
      {tasks.map(task => (
        <FreshTaskItem key={task.id} steps={steps} {...task} />
      ))}
    </div>
  );
  
};

export default FreshTasks;

// remove this comment
