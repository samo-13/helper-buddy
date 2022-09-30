import React from "react";
import { TbUserCircle } from 'react-icons/tb';

function Home() {
  return (
      <div className="App">
        <header className="App-header">
           <h2>Helper Buddy!</h2>
           <h3>Tasks go here...</h3>
           <form action="../../post" method="post">
            <button type="submit">Connected?</button>
           </form>
        </header>
      </div>
    );
  }

export default Home;
