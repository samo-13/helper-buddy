import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">< AiOutlineHome /></Link>
        </li>
        <li>
          <Link to="/ActiveTasks">In Progress Tasks</Link>
        </li>
        <li>
          <Link to="/Task">Task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
