import { Link, useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { BiArrowBack } from "react-icons/bi";

export default function NotFoundPage() {
  const location = useLocation();
  const backLink = location.state?.from ?? "/";
  return (
    <main className={css.container}>
      <h1 className={css.notFoundTitle}>404</h1>
      <h2 className={css.notFoundSubTitle}>There's NOTHING here...</h2>
      <p className={css.notFoundText}>
        ...mayby the page you're looking for is not found or never existed.
      </p>
      <Link to={backLink}>
        <button className={css.notFoundBtn}>
          <BiArrowBack /> Back to home
        </button>
      </Link>
    </main>
  );
}
