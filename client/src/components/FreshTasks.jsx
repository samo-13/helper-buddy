import FreshTaskItem from './FreshTaskItem';

const FreshTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <FreshTaskItem key={task.task.id} {...task} />
      ))}
    </div>
  );
};

export default FreshTasks;

// remove this comment
