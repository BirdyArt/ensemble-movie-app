import Header from './Header';
import hero from '../assets/hero.webp';

const Layout = ({ children }) => {
  return (
    <div>
      <img src={hero} alt="hero image" className="w-full object-cover h-screen" />
      <Header />
      <div
        className="heading-container absolute flex justify-center items-center w-full h-full top-0 bg-slate-500/70"
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;