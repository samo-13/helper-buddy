import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './Navigation.scss';
import Button from './Button';

function Navbar() {
  return (
    <nav className='nav'>
      <section className='nav__links'>
        <Link className='nav__icon' to='/'>
          <AiOutlineHome className='nav__icon--home' />
        </Link>
        <Link to='/create'>Create Task</Link>
        <Link to='/archive'>Archived Tasks</Link>
      </section>
      <Button className='nav__button'>Log out</Button>
    </nav>
  );
}

export default Navbar;
