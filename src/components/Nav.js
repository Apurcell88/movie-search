import Stack from 'react-bootstrap/Stack';
import { useEffect } from 'react';

const Nav = ({ movies, setMovies }) => {
  useEffect((props) => {
    const fetchMovies = async () => {
      try {
        const apiKey = '51199ad127900c0adc25977cf075af18';

        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

        const data = await res.json();

        setMovies(data.results);
        console.log(movies);
      } catch (error) {
        console.error('Error fetching movie data', error);
      }
    };

    fetchMovies();
  });

  return (
    <Stack className='nav-stack' direction="horizontal" gap={1}>
      <div className='p-2'>
        <img src="" alt="Logo" />
      </div>
      <div className='p-2 ms-auto'>
        <input type="text" placeholder='Search Movies' />
      </div>
      <div className='p-2'>
        <button className='nav-search-btn'>Search</button>
      </div>
    </Stack>
  )
}

export default Nav;