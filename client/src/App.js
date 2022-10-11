import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Task from './pages/Task';
import Create from './pages/Create';
import Archive from './pages/Archive';
import Bar from './pages/TEMPProgressBar';
import TimerPage from './pages/TimerPage';
import ActiveTasks from './pages/ActiveTasks'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='task/:id' element={<Task />}></Route>
            <Route path='create' element={<Create />}></Route>
            <Route path='archive' element={<Archive />}></Route>
            <Route path='bar' element={<Bar />}></Route>
            <Route path='timer' element={<TimerPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
