const MovieCard = ({ movie }) => {
  if (!movie) {
    return <div>No movie data</div>
  }
  return (
    <div className='movie-card'>
      {/* <img src={movie.backdrop_path} alt="movie cover" /> */}
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
}
 
export default MovieCard;