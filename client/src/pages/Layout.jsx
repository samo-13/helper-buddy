import React from "react";
import { Outlet } from "react-router-dom"; // look this up
import Navbar from "../Navigation";
import Header from "../Header"

const Layout = () => {
  return (
    <span>
      <Navbar />
      <Header />
      <Outlet />
    </span>
  );
};

export default Layout;
