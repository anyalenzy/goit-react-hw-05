import { Routes, Route } from "react-router-dom";
import "./App.css";
import MoviesPage from "../pages/MoviesPage";
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="movies/:movieId/cast" element={<MovieCast />} />
          <Route path="movies/:movieId/reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
