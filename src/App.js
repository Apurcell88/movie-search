import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import MovieList from './components/MovieCard';
import MovieCard from './components/MovieCard';


function App() {
  // STATE
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchedMovieTitle, setSearchedMovieTitle] = useState('');
  const [searchedMovie, setSearchedMovie] = useState([]);

  useEffect(() => {
    const fetchMovieByTitle = async () => {
      try {
        const apiKey = '51199ad127900c0adc25977cf075af18';

        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchedMovieTitle}`);

        const data = await res.json();

        setSearchedMovie(data.results);
      } catch (error) {
        console.error('Error fetching movie data', error);
      }
    };

    fetchMovieByTitle();
  });

  return (
    <div className="App">
      <Nav
        movies={movies}
        setMovies={setMovies}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchedMovieTitle={setSearchedMovieTitle}
      />
      <Landing />
      {/* <MovieList movies={movies} /> */}
        {!searchedMovieTitle ?
        <div className='movie-list-container'>
          <h1 className='popular-title'>Popular Movies</h1>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div> :
        <div className='movie-list-container'>
          {searchedMovie.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        }
      <div className="overlay"></div>
    </div>
  );
}

export default App;
