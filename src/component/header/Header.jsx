import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/acm-logo.png'

function Header() {
  return (
    <header className='navbar-header'>
      <nav className='navbar web-view'>
        <a href='/'><img src={logo} alt='acm-logo' /></a>

        <ul>
          <li><Link className='a' to="/">Home</Link></li>
          <li>
            <Link className='a about-hover' to="/about">About Us</Link>
            <ul className='About-us-hover'>
              <li><Link className='a about' to="/About ACM">About ACM</Link></li>
            </ul>
          </li>
          <li><Link className='a' to="/resources">Resources</Link></li>
          <li><Link className='a' to="/Board">The Board</Link></li>
          <li><Link className='a' to="/events">Events</Link></li>
          <li><Link className='a' to="/gallery">Gallery</Link></li>
          <li><Link className='a' to="/contact">Contact</Link></li>
        </ul>

      </nav>

      <nav className='navbar mobile-view'>
        <nav role="navigation">
          <div id="menubtn">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id='menus'>
              <li><Link className='a' to="/">Home</Link></li>
              <li><Link className='a about-hover' to="/about">About Us</Link></li>
              <li><Link className='a about' to="/About ACM">About ACM</Link></li>
              <li><Link className='a' to="/resources">Resources</Link></li>
              <li><Link className='a' to="/Board">The Board</Link></li>
              <li><Link className='a' to="/events">Events</Link></li>
              <li><Link className='a' to="/gallery">Gallery</Link></li>
              <li><Link className='a' to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
