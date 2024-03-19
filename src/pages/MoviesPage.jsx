import SearchForm from "../components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "../services/tmdb-api";
import { useState, useEffect } from "react";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {});
  return <SearchForm onSearch={handleSearchQuery} />;
}
