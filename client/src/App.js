import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Task from './pages/Task';
import Create from './pages/Create';
import Archive from './pages/Archive';
import ActiveTasks from './pages/ActiveTasks'

function App() {
  console.log("process", process.env.REACT_APP_APP_KEY)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='task/:id' element={<Task />}></Route>
            <Route path='create' element={<Create />}></Route>
            <Route path='archive' element={<Archive />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
