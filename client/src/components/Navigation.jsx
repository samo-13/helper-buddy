import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './Navigation.scss';

function Navbar() {
  return (
    <nav>
      <div className='container'>
        <Link className='icon' to='/'>
          <AiOutlineHome className='icon__home'/>
        </Link>
        <Link to='/archive'>Archived Tasks</Link>
        <button>Log out</button>
      </div>
    </nav>
  );
}

export default Navbar;
