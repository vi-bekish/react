import axios from 'axios';

const TOKEN = '1fd538374c174a845287553d5b6d9bc0';
const LANG = `language=uk-UK`;
const URL = 'https://api.themoviedb.org/3';

const getPopularMovies = async page =>
await axios.get(`${URL}/movie/popular?api_key=${TOKEN}&${LANG}&page=${page === undefined ? 1 : page}`);

const getGenres = async () => 
await axios.get(`${URL}/genre/movie/list?api_key=${TOKEN}&${LANG}`);

const getMovieDetails = async id => 
await axios.get(`${URL}/movie/${id}?api_key=${TOKEN}&${LANG}&append_to_response=credits,release_dates`);

const getSimilarMovies = async (id, page) => 
await axios.get(`${URL}/movie/${id}/similar?api_key=${TOKEN}&${LANG}&page=${page}`);

const getMovieSearchResults = async (query, page) =>
await axios.get(`${URL}/search/movie?api_key=${TOKEN}&${LANG}&query=${query}&page=${page === undefined ? 1 : page}`);

export const api = {
  getPopularMovies,
  getGenres,
  getMovieDetails,
  getSimilarMovies,
  getMovieSearchResults
};
