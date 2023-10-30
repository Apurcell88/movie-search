import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    console.log(movies);
    return (
        <div className='movie-list-container'>
          <h1>Popular Movies</h1>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
    );
}
 
export default MovieList;