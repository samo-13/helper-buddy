import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
  return (
    <nav>
      <Link class="icon" to="/">< AiOutlineHome /></Link>
    </nav>
  );
}

export default Navbar;
