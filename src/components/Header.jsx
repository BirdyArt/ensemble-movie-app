import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pages = ['Home', 'Search'];
  const navLinks = pages.map(page => 
    <Link 
      key={page} 
      className="no-underline text-gray-800 font-semibold hover:text-gray-600" 
      to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
    >
      {page}
    </Link>
  );

  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
      {menuOpen &&
        <nav className="p-4 flex flex-col space-y-3 md:hidden text-center text-lg">
          {navLinks}
        </nav>}
    </div>
  );
};


export default Header;