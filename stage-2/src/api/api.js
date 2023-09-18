import axios from 'axios';

const accesskey = import.meta.env.VITE_ACCESS_TOKEN;
const apikey = import.meta.env.VITE_API_KEY;

const options = {
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: `Bearer ${accesskey}`
  },
  params: {
    language: 'en-US',
    api_key: apikey
  }
};

const instance = axios.create(options);

export const getMovies = async () => {
  try {
    const response = await instance.get('movie/popular');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGenres = async () => {
  try {
    const response = await instance.get('genre/movie/list');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await instance.get('search/movie', {
      params: {
        query,
        page: 1
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetails = async (movie_id) => {
  try {
    const response = await instance.get(`movie/${movie_id}`, {
      params: {
        append_to_response: 'videos,credits'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Can't find movie with id: ", error);
  }
};
