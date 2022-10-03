import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import './Navigation.scss';
import Button from './Button';

function Navbar() {
  return (
    <nav className='nav'>
      <section className='nav__links'>
        <NavLink to='/'>
          <AiOutlineHome className='nav__icon--home' />
        </NavLink>
        <NavLink to='/create'>Create Task</NavLink>
        <NavLink to='/archive'>Archived Tasks</NavLink>
        <NavLink to='/task'>Task</NavLink>
      </section>
      <Button className='nav__button'>Log out</Button>
    </nav>
  );
}

export default Navbar;
