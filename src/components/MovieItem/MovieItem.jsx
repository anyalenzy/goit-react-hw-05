import css from "./MovieItem.module.css";

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
      <div className={css.trandingThumb}>
        <h3 className={css.trandingTitle}>{title}</h3>
        <p className={css.trandingText}>Rating: {vote_average}</p>
      </div>
    </>
  );
}
