import FreshTaskItem from './FreshTaskItem';

const FreshTasks = ({ tasks }) => {
  const steps = tasks[0].steps;
  console.log('STEPS FROM FreshTasks:', steps)
  return (
    <div>
      {tasks.map(task => (
        // is here where we should be finding the index of the task?
        <FreshTaskItem {...task} />
      ))}
    </div>
  );
};

export default FreshTasks;