import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Example 1</Link>
        </li>
        <li>
          <Link to="/contact">Example 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
