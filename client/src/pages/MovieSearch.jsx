import { useState } from "react";
import "../styles/movie-app/moviePg.css";
import "../components/movie-app/MovieCard.jsx";
import MovieCard from "../components/movie-app/MovieCard.jsx";

export default function MovieSearch() {
  const [movieInput, setMovieInput] = useState("");
  const [movies, setMoviesData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/api/movies/${movieInput}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movieInput }),
      });
      if (!res.ok) throw new Error(`Failed to fetch: ${res}`);
      const data = await res.json();
      console.log("Fetched data:", data.results);
      setMoviesData(data.results);
    } catch (err) {
      console.log(`Failed to fetch data: ${err}`);
    }
    setMovieInput("");
  };

  return (
    <main className="movie-pg">
      <h1>Challenge: Medium</h1>
      <p>
        Task: Program a movie search app with React hooks and React Router.
        Utilize an API to fetch movie data based on user search queries. Display
        search results and implement a detailed view for each movie.
      </p>
      <form onSubmit={handleSubmit} className="movie-search">
        <label htmlFor="movieInput" className="movie-search__label">
          Movie Name
        </label>
        <input
          type="text"
          id="movieInput"
          className="movie-search__input"
          value={movieInput}
          onChange={(e) => {
            setMovieInput(e.target.value);
          }}
        />
        <button type="submit" className="movie-search__submitBtn">
          Search
        </button>
      </form>
      <section className="results">
        <h2>Search Results</h2>
        {movies !== null && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </section>
    </main>
  );
}
