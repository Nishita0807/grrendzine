// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from "../assets/Group 46.png";
import "../styles/header.css";
import logo from "../assets/moptro logo.png";

function Header() {
  return (
    <div className='profile'>
      <div className='first-row'>
        <img src={profile}/>
      </div>
      <div className='second-row'>
        <div className='logo-container'>
          <img src={logo}/>
          <div className='top-right'>4</div> {/* Position the "4" div */}
        </div>
      </div>
    </div>
  );
}

export default Header;
