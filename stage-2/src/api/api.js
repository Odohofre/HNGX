import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: {
//     api_key: API_KEY,
//   }
// })

const accesskey = import.meta.env.VITE_ACCESS_TOKEN;
const apikey = import.meta.env.VITE_API_KEY;

const movieOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accesskey}`,
  },
};

export async function getMovies() {
  try {
    const response = await axios.request(movieOptions);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchMovie(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apikey}&append_to_response=videos,credits`
    );
    return response.data;
  } catch (error) {
    console.error("Can't find movie with id: ", error);
  }
}
// https://api.themoviedb.org/3/movie/{movie_id}
