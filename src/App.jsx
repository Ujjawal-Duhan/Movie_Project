import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";
import MovieDetailsModal from "./components/MovieDetailsModal";
import "./styles/App.css";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="app">
      <header>
        <h1>🎬Movie Explorer</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-dark">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <SearchBar
        query={query}
        setQuery={setQuery}
        setMovies={setMovies}
        setErrorMessage={setErrorMessage}
      />

      {errorMessage && (
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      )}

      <div className="main">
        <MovieList
          movies={movies}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          setSelectedMovieId={setSelectedMovieId}
        />
        <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
      </div>

      {selectedMovieId && (
        <MovieDetailsModal
          imdbID={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
}

export default App;
