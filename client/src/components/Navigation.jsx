import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './Navigation.scss';

function Navbar() {
  return (
    <nav>
      <Link className='nav__icon' to='/'>
        <AiOutlineHome className='nav__icon--home' />
      </Link>
      <Link to='/archive'>Archived Tasks</Link>
      <button>Log out</button>
    </nav>
  );
}

export default Navbar;
