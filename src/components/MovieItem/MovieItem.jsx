import css from "./MovieItem.module.css";
import defaultImg from "../../assets/img/image-not-found.png";

export default function MovieItem({
  movie: { poster_path, title, vote_average },
}) {
  return (
    <>
      <img
        className={css.movieImg}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : defaultImg
        }
        alt={title}
        width="250"
        height="350"
      />
      <div className={css.movieDescContainer}>
        <h3 className={css.movieTitle}>{title}</h3>
        <p className={css.movieText}>Rating: {vote_average.toFixed(2)}</p>
      </div>
    </>
  );
}
