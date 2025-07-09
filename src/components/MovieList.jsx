import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

function MovieList({ movies, watchlist, setWatchlist, setSelectedMovieId }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          onSelect={setSelectedMovieId}
        />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  watchlist: PropTypes.array.isRequired,
  setWatchlist: PropTypes.func.isRequired,
  setSelectedMovieId: PropTypes.func.isRequired,
};

export default MovieList;
