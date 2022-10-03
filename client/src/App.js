import './styles/App.scss';
// import { TbUserCircle } from 'react-icons/tb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Create from './pages/Create';
import Archive from './pages/Archive';
import Task from './pages/Task';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='create' element={<Create />}></Route>
            <Route path='archive' element={<Archive />}></Route>
            {/* <Route path='task' element={<Task />}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <h1>
          <TbUserCircle /> Bob Smith
        </h1>
        <p>Helper Buddy!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;


