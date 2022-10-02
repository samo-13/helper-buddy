import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './freshTaskItem.scss';
// import './Layout.scss'
import './Home.scss';
import ActiveTasks from '../components/ActiveTasks';
import FreshTasks from '../components/FreshTasks';

// function Home() {
//   // const [tasks, setTasks] = useState([])

//   useEffect(() => {
//     Promise.all([
//       axios.get('http://localhost:8080/api/tasks')
//     ])
//     .then((response) => {
//       const tasks = response[0].data
//       setTasks(tasks)
//     })
//   }, [])

//   return (
//       <div class="layout" id='home'>
//         <h1>Home</h1>
//         {/* <header className="App-header">
//            <h2>Welcome message!</h2>
//         </header>
//         <div class="btn-group">
//             <button>Start Fresh</button>
//             <button>In-Progress</button>
//           </div>
//           <div class="taskItems">
//             {tasks.map(task => (
//               <h3 class='freshTask'>{task.name}</h3>
//             ))}
//            </div> */}
//       </div>
//     );
//   }

// export default Home;

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    Promise.all([axios.get('/api/tasks')])
      .then(response => {
        const tasks = response[0].data;
        setTasks(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='home'>
      <section className='home__welcome-message'>
        <h2>Welcome message!</h2>
      </section>

      <section className='home__button-group'>
        <button onClick={() => setActive(false)}>Start Fresh</button>
        <button onClick={() => setActive(true)}>In-Progress</button>
      </section>

      <section className='home__list'>
        {active && <ActiveTasks />}
        {!active && <FreshTasks tasks={tasks} />}
      </section>
    </div>
  );
};

export default Home;
