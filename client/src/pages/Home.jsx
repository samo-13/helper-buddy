import React, {useState, useEffect} from "react";
import axios from 'axios';
import './freshTaskItem.scss';
import './Layout.scss'

function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/tasks')
    ])
    .then((response) => {
      const tasks = response[0].data
      setTasks(tasks)
    })
  }, [])

  return (
      <div className="App" id='home'>
        <header className="App-header">
           <h2>Helper Buddy!</h2>
           <div class="btn-group">
            <button>Start Fresh</button>
            <button>In-Progress</button>
          </div>

           {tasks.map(task => (
           <h3 class='freshTask'>{task.name}</h3>

           ))}
        </header>
      </div>
    );
  }

export default Home;
