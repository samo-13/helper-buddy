import React, {useState, useEffect} from "react";
import axios from 'axios';

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
      <div className="App">
        <header className="App-header">
           <h2>Helper Buddy!</h2>
           {/* <h3>Tasks go here...</h3> */}
           {tasks.map(task => (<h3>{task.name}</h3>))}
        </header>
        <div>
          <form action="../../post" method="post">
            <button type="submit">Connected?</button>
          </form>
        </div>
      </div>
    );
  }

export default Home;
