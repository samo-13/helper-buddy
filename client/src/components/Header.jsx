import React from 'react';
// import { TbUserCircle } from 'react-icons/tb';
import './Header.scss';

// This is for the username and icon - shown on ALL app pages

function Header() {
  return (
    <div className='header'>
      <div className='header__avatar'>
        <img src='https://via.placeholder.com/150' alt='Bob Smith' />
      </div>
      <h1>Bob Smith</h1>
      {/* <header className="App-header">
          <h1><TbUserCircle /> Bob Smith</h1>
        </header> */}
    </div>
  );
}

export default Header;
