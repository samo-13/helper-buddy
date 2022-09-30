import React from "react";
import { TbUserCircle } from 'react-icons/tb';

// This is for the username and icon - shown on ALL app pages

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
