import search from '../assets/search.svg';

const Input = ({ handleSearch }) => {
  return (
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img 
            src={search} 
            alt="search icon" 
            className='h-4 w-4'
          />        
        </div>
        <input 
          onChange={handleSearch} 
          type="text" 
          id="search" 
          className="bg-gray-50 border focus:outline-slate-300 border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5" 
          placeholder="Enter movie title here" 
        />
      </div>
  );
};

export default Input;