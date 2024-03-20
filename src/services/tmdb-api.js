import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTUxMGMyNTdiNmM4NmNmYWIxNDE5YTE2Mjg0MzE2YiIsInN1YiI6IjY1Zjc1MDY2ZDhmNDRlMDE3YzUwZDhjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oNrFzQKyGi_4DFolpmOhJKigytFDGD65h0obnZ2Ktu8",
  },
};

const fetchTrending = async () => {
  const response = await axios.get(
    `trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};
const fetchMoviesByQuery = async (query) => {
  const response = await axios.get(
    `search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return response.data.results;
};

const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?language=en-US`, options);
  return response.data;
};

const fetchActors = async (movieId) => {
  const response = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

const fetchReviews = async (movieId) => {
  const response = await axios.get(
    "movie/${movieId}/reviews?language=en-US&page=1",
    options
  );
};

export {
  fetchTrending,
  fetchMoviesByQuery,
  fetchMovieDetails,
  fetchActors,
  fetchReviews,
};
