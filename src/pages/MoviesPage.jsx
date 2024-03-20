import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import SearchForm from "../components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "../services/tmdb-api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!searchParams) return;
    const fetchMoviesBySearchQuery = async () => {
      try {
        setError(null);
        setLoader(true);
        const res = await fetchMoviesByQuery(searchQuery);
        if (res.length === 0) {
          setError(
            "Sorry, there are no movies matching your search query. Please try again!"
          );
          setMovies([]);
        } else {
          setMovies(res);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    if (searchQuery !== "") {
      fetchMoviesBySearchQuery();
    }
  }, [searchQuery]);

  const handleSearchQuery = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm onSearch={handleSearchQuery} />
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      <MovieList movies={movies} />
    </main>
  );
}
