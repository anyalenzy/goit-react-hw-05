import css from "./MovieItem.module.css";

export default function MovieItem({
  movie: { poster_path, title, vote_average },
}) {
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
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
