import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import BackLink from "../../components/BackLink/BackLink";
import { fetchMovieDetails } from "../../services/tmdb-api";
import defaultImg from "../../assets/img/image-not-found-scaled-1150x647.png";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieData = async () => {
      try {
        setError(null);
        setLoader(true);
        setMovie([]);
        const res = await fetchMovieDetails(movieId);
        setMovie(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMovieData();
  }, [movieId]);

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movie || {};

  return (
    <main>
      <BackLink to={backLinkHref}>Back</BackLink>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movie && (
        <div className={css.movieContainer}>
          <div className={css.movieContainerUp}>
            <img
              width="300px"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultImg
              }
              alt={original_title}
            />
          </div>
        </div>
      )}
    </main>
  );
}
