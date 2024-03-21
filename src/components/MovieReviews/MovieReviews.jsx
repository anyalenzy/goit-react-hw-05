import css from "./MovieReviews.module.css";
import { useState, useEffect } from "react";
import { fetchReviews } from "../../services/tmdb-api";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchDataReviews = async () => {
      try {
        setLoader(true);
        setError(null);
        const res = await fetchReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchDataReviews();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loader && !error && reviews.length === 0 && (
        <ErrorMessage message="We don't have any reviews for this movie" />
      )}
      {reviews.length > 0 && (
        <ul className={css.reviewsContainer}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewsItem}>
              <h3 className={css.reviewsAuthor}>Author: {author}</h3>
              <p className={css.reviewsText}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
