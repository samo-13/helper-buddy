// import React, {useState, useEffect} from "react";
// import axios from 'axios';
// import './freshTaskItem.scss';
// import './Layout.scss'
// import './Home.scss'

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
  return ( 
    <div>
      <h1>Home</h1>
    </div>
   );
}
 
export default Home;