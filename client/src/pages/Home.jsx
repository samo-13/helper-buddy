import React from "react";

function Home() {
  return (
      <div className="App">
        <header className="App-header">
           <h2>Helper Buddy!</h2>
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
