import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.moviesContainer}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieItem movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
