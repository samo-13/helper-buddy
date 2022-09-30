import React from "react";

function Home() {
  return (
      <div className="App">
        <header className="App-header">
           <h2>Helper Buddy!</h2>
           <h3>Tasks go here...</h3>
        </header>
        <form action="../../post" method="post">
          <button type="submit">Connected?</button>
        </form>
      </div>
    );
  }

export default Home;
