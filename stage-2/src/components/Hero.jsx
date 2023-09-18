import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import HeroDescription from './HeroDescription';
import { getMovies, getMovieDetails } from '../api/api';

const IMG_PATH = 'https://image.tmdb.org/t/p/original';

async function fetchRandomMovie() {
  try {
    const movies = await getMovies();
    const randomMovieIndex = Math.floor(Math.random() * movies.results.length);
    const randomMovie = movies.results[randomMovieIndex];
    const movieDetails = await getMovieDetails(randomMovie.id);

    return { movieDetails, randomMovie };
  } catch (error) {
    console.error('Error fetching random movie', error);
  }
}

export default function Hero() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { movieDetails, randomMovie } = await fetchRandomMovie();
        setMovie(movieDetails);
        if (randomMovie.backdrop_path) {
          setBackgroundImage(`${IMG_PATH}${randomMovie.poster_path}`);
        }
      } catch (error) {
        console.error('Error fetching Data', error)
      }
    }

    fetchData();
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center relative flex items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      {movie && <HeroDescription movie={movie} />}
    </section>
  );
}
