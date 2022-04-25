import {useEffect, useState} from 'react';
import Input from '../components/Input';
import Card from '../components/Card';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('star wars');
  const [movies, setMovies] = useState(null);
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const movies = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
        setMovies(movies.data.Search);
      } catch (error) {
        console.log(error)
      }
    })(); 
  }, [searchTerm])
  
  return (
    <div className="container text-center mx-auto pt-8 w-11/12">
      <Input handleSearch={handleSearch} />
      {
        movies 
        ? 
        <div className="px-10 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 overflow-scroll h-128">
          {movies.map(movie => {
            return (
              <Card
                key={movie.imdbID}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            )
          })
        }
        </div>
        : 
        <h1 className="text-5xl font-semibold text-white pt-16">
          Sorry, no movies found :(
        </h1>
      }
    </div>
  );
};

export default Search;