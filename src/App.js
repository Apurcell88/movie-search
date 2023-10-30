import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import MovieList from './components/MovieCard';
import MovieCard from './components/MovieCard';


function App() {
  // STATE
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // create state to toggle if popular movies should display or if a searched movie. Might have to create another fetch call to API to get all movies instead of popular.

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="App">
      <Nav
        movies={movies}
        setMovies={setMovies}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {/* <MovieList movies={movies} /> */}
      <div className='movie-list-container'>
          <h1 className='popular-title'>Popular Movies</h1>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
