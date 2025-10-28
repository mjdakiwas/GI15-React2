import "../../styles/movie-app/movieCard.css";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={`${movie.title} Movie Poster`}
        className="movie-card__img"
      />
      <p className="movie-card__title">{movie.title}</p>
      <p className="movie-card__overview">{movie.overview}</p>
    </div>
  );
}
