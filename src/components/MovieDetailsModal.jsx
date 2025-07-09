import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function MovieDetailsModal({ imdbID, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=a7f5ff37`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [imdbID]);

  if (!details) return <div className="modal">Loading…</div>;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{details.Title} ({details.Year})</h2>
        <img src={details.Poster} alt={details.Title} />
        <p><strong>Plot:</strong> {details.Plot}</p>
        <p><strong>Genre:</strong> {details.Genre}</p>
        <p><strong>IMDB Rating:</strong> {details.imdbRating}</p>
        <p><strong>Actors:</strong> {details.Actors}</p>
      </div>
    </div>
  );
}

MovieDetailsModal.propTypes = {
  imdbID: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MovieDetailsModal;
