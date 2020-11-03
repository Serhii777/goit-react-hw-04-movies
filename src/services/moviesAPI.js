//* "https://api.themoviedb.org/3/trending/all/day?api_key=0e322ad2a3bf93179a3983749fdc0c73"
//* https://api.themoviedb.org/3/search/company?api_key=0e322ad2a3bf93179a3983749fdc0c73&query=cat&page=1
//* https://api.themoviedb.org/3/movie/624963?api_key=0e322ad2a3bf93179a3983749fdc0c73&language=en-US
//* https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=0e322ad2a3bf93179a3983749fdc0c73
//* https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=0e322ad2a3bf93179a3983749fdc0c73&language=en-US&page=1

const baseUrl = "https://api.themoviedb.org/3/";
const key = "0e322ad2a3bf93179a3983749fdc0c73";
const trendingMovies = "trending";
const language = "en-US";

const fetchTrendingMovies = () => {
  return fetch(`${baseUrl}${trendingMovies}/all/day?api_key=${key}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMoviesWithQuery = (searchQuery) => {
  return fetch(
    `${baseUrl}search/company?api_key=${key}&query=${searchQuery}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

const fetchMoviesDetails = (movieId) => {
  return fetch(`${baseUrl}movie/${movieId}?api_key=${key}&language=${language}`)
    .then((res) => res.json())
    .then((data) => data);
};

const fetchMovieCast = (movieId) => {
  return fetch(`${baseUrl}movie/${movieId}/credits?api_key=${key}&language=${language}`)
    .then((res) => res.json())
    .then((data) => data.cast);
};

const fetchMovieReview = (movieId) => {
  return fetch(`${baseUrl}movie/${movieId}/reviews?api_key=${key}&language=${language}`)
    .then((res) => res.json())
    .then((data) => data.results);
};

export default {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMoviesDetails,
  fetchMovieCast,
  fetchMovieReview,
};
