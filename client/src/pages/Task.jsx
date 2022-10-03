import './Create.scss';


export default function Task() {
    return (
      <div className="App">
        <header className="App-header">
           <h2>Task List!</h2>
           <h3><StepList props={props}/></h3>
        </header>
        <div>
          <form action="../../post" method="post">
            <button type="submit">Connected?</button>
          </form>
        </div>
      </div>
    );
  }



