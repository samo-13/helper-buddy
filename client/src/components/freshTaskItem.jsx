import { Link } from 'react-router-dom';
import './Taskbox.scss';

const FreshTaskItem = ({ id, name }) => {
  return (
    <div className='taskbox'>
      <Link to={`/task/${id}`}>
        <span>-- Steps</span>
        <h3>{name}</h3>
        <h4>Average time to complete:</h4>
      </Link>
    </div>
  );
};

export default FreshTaskItem;
