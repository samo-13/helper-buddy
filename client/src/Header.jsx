import React from "react";
import { TbUserCircle } from 'react-icons/tb';

function Header() {
  return (
      <div className="App">
        <header className="App-header">
          <h1><TbUserCircle /> Bob Smith</h1>
        </header>
      </div>
    );
  }

export default Header;
