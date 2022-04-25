import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = ['Home', 'Search'];
  const navLinks = pages.map(page => 
    <Link 
      key={page} 
      className="no-underline text-white font-semibold hover:text-gray-100/50 text-lg" 
      to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
      onClick={menuOpen ? () => setMenuOpen(!menuOpen) : null} 
    >
      {page}
    </Link>
  );

  return (
    <div className="absolute top-0 w-full">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
    </div>
  );
};

export default Header;