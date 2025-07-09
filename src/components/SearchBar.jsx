import PropTypes from "prop-types";

function SearchBar({ query, setQuery, setMovies, setErrorMessage }) {
  const fetchMovies = (searchTerm) => {
    if (!searchTerm) {
      setMovies([]);
      setErrorMessage("");
      return;
    }

    fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&type=movie&apikey=a7f5ff37`)
      .then(res => res.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search.slice(0, 10));
          setErrorMessage("");
        } else {
          setMovies([]);
          setErrorMessage(`No results found for: "${searchTerm}"`);
        }
      })
      .catch(err => {
        console.error("Error fetching movies:", err);
        setMovies([]);
        setErrorMessage("Something went wrong. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        style={{ flex: 1, padding: "0.5rem", fontSize: "1rem" }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default SearchBar;
