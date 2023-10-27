import './App.css';
import Nav from './components/Nav';
import Movies from './api/movieDbApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  // STATE
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Nav
        movies={movies}
        setMovies={setMovies}
      />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
