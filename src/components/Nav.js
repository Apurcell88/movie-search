import Stack from 'react-bootstrap/Stack';
import { useEffect } from 'react';

const Nav = ({
  movies,
  setMovies,
  inputValue,
  setInputValue,
  setSearchedMovieTitle
  }) => {
  // GET LIST OF POPULAR MOVIES
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '51199ad127900c0adc25977cf075af18';

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

        const data = await res.json();

        setMovies(data.results);
        // console.log(movies);
      } catch (error) {
        console.error('Error fetching movie data', error);
      }
    };

    fetchMovies();
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSearchClick = (e) => {
    setSearchedMovieTitle(inputValue);
  }

  return (
    <Stack className='nav-stack' direction="horizontal" gap={1}>
      <div className='p-0'>
        <h1 className='nav--logo'>MovieREELZ</h1>
      </div>
      <div className='p-0 ms-auto'>
        <input
          className='nav--input'
          type="text"
          placeholder='Search Movies'
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className='p-2'>
        <button
          className='nav-search-btn'
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </Stack>
  )
}

export default Nav;