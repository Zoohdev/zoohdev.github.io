import React from 'react';
import './Navbar.css'; // Styling for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#about">Overview</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
