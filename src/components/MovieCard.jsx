import PropTypes from "prop-types";

function MovieCard({ movie, watchlist, setWatchlist, onSelect }) {
  const inWatchlist = watchlist.some(m => m.imdbID === movie.imdbID);

  const addToWatchlist = () => {
    if (!inWatchlist) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
      />
      <h3>{movie.Title} ({movie.Year})</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToWatchlist();
        }}
        disabled={inWatchlist}
      >
        ＋ Watchlist
      </button>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  watchlist: PropTypes.array.isRequired,
  setWatchlist: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default MovieCard;
