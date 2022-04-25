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
      onClick={() => setMenuOpen(!menuOpen)} 
    >
      {page}
    </Link>
  );

  return (
    <div className="bg-transparent absolute top-0 w-full">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks} />
      {menuOpen &&
        <nav className="w-full absolute p-4 flex flex-col space-y-3 md:hidden text-center text-lg top-16 left-1/2 transform -translate-x-1/2 z-10 border-b-2">
          {navLinks}
        </nav>}
    </div>
  );
};

export default Header;