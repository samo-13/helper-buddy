// import React from "react";
import { Outlet } from 'react-router-dom'; // look this up
import Navbar from '../components/Navigation';
import Header from '../components/Header';
import './Layout.scss';

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className='layout__container'>
        <Header />
        <Outlet />
      </div>
    </>

    // <span>
    //   <Navbar />
    //   <Header />
    //   <Outlet />
    // </span>
  );
};

export default Layout;
