import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
      <div className="App">
        <header className="App-header">
          <h1><TbUserCircle /> Bob Smith</h1>
           <h1></h1> Helper Buddy! Tasks go here!<h1/>
        </header>
      </div>
    );
  }

export default Home;
