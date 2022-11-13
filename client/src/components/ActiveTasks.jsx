import ActiveTaskItem from './ActiveTaskItem';
import useApplicationData from '../hooks/useApplicationData';

const ActiveTasks = () => {

  const {
    state,
  } = useApplicationData();

  let activeTasks = state.tasks

  return (
  <div>
    {activeTasks.map(task => (
      <ActiveTaskItem {...task} />
    ))}
  </div>
)}

export default ActiveTasks;
