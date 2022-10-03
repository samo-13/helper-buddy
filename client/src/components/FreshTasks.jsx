import FreshTaskItem from './freshTaskItem';

const FreshTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <FreshTaskItem key={task.id} {...task} />
      ))}
    </div>
  );
};

export default FreshTasks;

// remove this comment
