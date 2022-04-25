import logo from '../assets/logo.png';
import menu from '../assets/menu.svg';
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen, navLinks }) => (
  <div className="flex items-center justify-between py-4 px-4 md:px-14">
    <div className="flex items-center">
      <img src={logo} alt="logo" className="h-14"/>
      <Link 
        to='/' 
        className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600 pl-3"
      >
        Ensemble Movie App
      </Link>
    </div>
    <nav className="hidden md:block space-x-6">
      {navLinks}
    </nav>
    <button 
      type="button" 
      aria-label="Toggle mobile menu" 
      onClick={() => setMenuOpen(!menuOpen)} 
      className="rounded md:hidden focus:outline-none"
    >
      <img 
        src={menu} 
        alt="logo" 
        className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`}
      />
    </button>
  </div>
);

export default Navbar;