import PropTypes from "prop-types";

function Watchlist({ watchlist, setWatchlist }) {
  const remove = (id) => {
    setWatchlist(watchlist.filter(movie => movie.imdbID !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newList = [...watchlist];
    [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
    setWatchlist(newList);
  };

  const moveDown = (index) => {
    if (index === watchlist.length - 1) return;
    const newList = [...watchlist];
    [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
    setWatchlist(newList);
  };

  return (
    <div className="watchlist">
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies yet.</p>
      ) : (
        watchlist.map((movie, index) => (
          <div key={movie.imdbID} className="watchlist-item">
            <span>{movie.Title} ({movie.Year})</span>
            <div style={{ display: "flex", gap: "0.3rem" }}>
              <button onClick={() => moveUp(index)}>⬆️</button>
              <button onClick={() => moveDown(index)}>⬇️</button>
              <button onClick={() => remove(movie.imdbID)}>❌</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

Watchlist.propTypes = {
  watchlist: PropTypes.array.isRequired,
  setWatchlist: PropTypes.func.isRequired,
};

export default Watchlist;
