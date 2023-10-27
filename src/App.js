import './App.css';
import Nav from './components/Nav';
import Movies from './api/movieDbApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  // STATE
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Nav
        movies={movies}
        setMovies={setMovies}
      />
      {/* <Movies /> */}
    </div>
  );
}

export default App;
