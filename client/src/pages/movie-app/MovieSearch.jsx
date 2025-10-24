import { useState, useEffect } from "react";

export default function MovieSearch() {
  const [movieInput, setMovieInput] = useState("");
  const [movies, setMoviesData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/movies/${movieInput}`, {
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
    <main>
      <h1>Challenge: Medium</h1>
      <p>
        Task: Program a movie search app with React hooks and React Router.
        Utilize an API to fetch movie data based on user search queries. Display
        search results and implement a detailed view for each movie.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieInput">Movie Name</label>
        <input
          type="text"
          id="movieInput"
          value={movieInput}
          onChange={(e) => {
            setMovieInput(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <section className="results">
        {movies !== null && movies.length > 0 ? (
          movies.map((movie) => <div key={movie.id}>{movie.title}</div>)
        ) : (
          <p>No movies found.</p>
        )}
      </section>
    </main>
  );
}
