import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchTrending } from "../../services/tmdb-api";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(null);
        setLoader(true);
        setMovies([]);
        const res = await fetchTrending();
        setMovies(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <section>
      <div className={css.container}>
        <h1>Trending today</h1>
        {loader && <Loader />}
        {error && <ErrorMessage message={error} />}
        <MovieList movies={movies} />
      </div>
    </section>
  );
}
