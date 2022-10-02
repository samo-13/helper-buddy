import './styles/App.css';
import { TbUserCircle } from 'react-icons/tb';
import  StepList from "../components/StepList";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1><TbUserCircle /> Bob Smith</h1>
        <p>
          Helper Buddy!
        </p>
      </header>
     
    </div>
  );
}

export default App;


