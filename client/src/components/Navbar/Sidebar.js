import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <a className='menu-item' href='/'>
        Home
      </a>
      <a className='menu-item' href='/signup'>
        Sign Up
      </a>
      <a className='menu-item' href='/signin'>
        Sign In
      </a>
      <a className='menu-item' href='/jobs'>
        Job Talk
      </a>
      <a className='menu-item' href='/education'>
        Further Educatiom
      </a>
      <a className='menu-item' href='/intern'>
        Apprentice & Intern 
      </a>
      <a className='menu-item' href='/signout'>
        Sign Out
      </a>
    </Menu>
  );
};