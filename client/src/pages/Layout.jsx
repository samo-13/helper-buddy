import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation";
import Header from "../Header"

const Layout = () => {
  return (
    <p>
      <Navbar />
      <Header />
      <Outlet />
    </p>
  );
};

export default Layout;
