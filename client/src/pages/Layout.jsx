import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navigation";

const Layout = () => {
  return (
    <p>
      <Navbar />
      <Outlet />
    </p>
  );
};

export default Layout;
