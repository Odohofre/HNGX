import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import HeroDescription from './HeroDescription';
import { getMovies, getMovieDetails } from '../api/api';

export default function Hero() {
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchRandomMovie() {
      try {
        const movies = await getMovies();
        const randomMovieIndex = Math.floor(
          Math.random() * movies.results.length
        );
        const randomMovie = movies.results[randomMovieIndex];
        const movieDetails = await getMovieDetails(randomMovie.id)

        setMovie(movieDetails)
        if (randomMovie.backdrop_path) {
          setBackgroundImage(`${IMG_PATH}${randomMovie.backdrop_path}`);
        }
      } catch (error) {
        console.error('Error fetching random movie', error);
      }
    }

    fetchRandomMovie();
  }, []);

  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavBar />
      {movie && <HeroDescription movie={movie} />}
      
    </section>
  );
}
