import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link class="icon" to="/">< AiOutlineHome /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
