import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ActiveTasks">Example 1</Link>
        </li>
        <li>
          <Link to="/Task">Example 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
