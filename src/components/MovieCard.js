const MovieCard = ({ movie }) => {
  if (!movie) {
    return <div>No movie data</div>
  }
  return (
    <div className='movie-card'>
      <div className="movie-card--movie-poster-container">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='Movie Poster' className="movie-card--poster"></img>
      </div>
      <div className="movie-card--movie-info-container">
        <h2 className="movie-card--title">{movie.title}</h2>
        <p className="movie-card--info">{movie.overview}</p>
        <p className="movie-card--info">Release Date: {movie.release_date}</p>
        <p className="movie-card--info">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}
 
export default MovieCard;