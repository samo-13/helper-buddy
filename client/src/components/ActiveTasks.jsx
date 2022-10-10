import ActiveTaskItem from './ActiveTaskItem';
import useApplicationData from '../hooks/useApplicationData';

const ActiveTasks = () => {

  const {
    state,
  } = useApplicationData();

  let activeTasks = state.tasks
  console.log('ActiveTasks state:', state);
  console.log('ActiveTasks', activeTasks);

  return (
  <div>
    Hi!
    {/* {activeTasks.map(task => (
      <ActiveTaskItem {...task} />
      <ActiveTaskItem/>
    ))} */}
  </div>
)}

export default ActiveTasks;
