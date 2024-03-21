import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { fetchActors } from "../../services/tmdb-api";
import { useParams } from "react-router-dom";
import defaultImg from "../../assets/img/image-not-found.png";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchDataActors = async () => {
      try {
        setLoader(true);
        setError(null);
        const res = await fetchActors(movieId);
        setActors(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchDataActors();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loader && !error && actors.length === 0 && (
        <ErrorMessage message="No cast information available." />
      )}

      {actors.length > 0 && (
        <ul className={css.actorsContainer}>
          {actors.map(({ id, profile_path, name, character }) => (
            <li key={id} className={css.actorsItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                width="200px"
                height="300px"
              />
              <div className={css.actorInfoContainer}>
                <p className={css.actorName}>{name}</p>
                <p className={css.actorCharacter}>
                  <span>Character:</span> {character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
