// Navigation bar

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleDarkMode }) => {
  return (
    <header>
      <h1>John Waithaka</h1>
      <nav>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </nav>
    </header>
  );
};

export default Header;