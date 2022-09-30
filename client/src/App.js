import './App.css';
import { TbUserCircle } from 'react-icons/tb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><TbUserCircle /> Bob Smith</h1>
        <p>
          Helper Buddy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
