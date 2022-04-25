import logo from '../assets/logo-white.png';
import menu from '../assets/menu.svg';
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen, navLinks }) => (
  <div className={`absolute w-full z-10 ${menuOpen ? 'bg-slate-400/75' : ''}`}>
    <div className="flex items-center justify-between py-4 px-4 md:px-14">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-14"/>
        <Link 
          to='/' 
          className="font-company text-4xl  font-bold no-underline text-white hover:text-gray-100/50 pl-3"
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
    {menuOpen &&
      <nav className="px-4 pb-4 flex flex-col space-y-3 md:hidden text-center text-lg z-10 border-b-2">
        {navLinks}
      </nav>
    }
  </div>
);

export default Navbar;