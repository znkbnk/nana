// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/story" className={location.pathname === '/story' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Story</Link>
        <Link to="/collections" className={location.pathname === '/collections' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Collections</Link>
      </nav>
    </div>
  );
};

export default Navbar;
