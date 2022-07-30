import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default function SideBar (props) {
  return (
    <Menu>
      <a className='menu-item' href='/'>
        Home
      </a>
      <a className='menu-item' href='/profile'>
        Profile
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
      <a className='menu-item' href='/signout'>
        Sign Out
      </a>
    </Menu>
  );
};
