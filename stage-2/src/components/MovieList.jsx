import React, { useEffect, useState } from 'react';
import { getMovies, getGenres } from '../api/api';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieData = await getMovies();
        setMovies(movieData.results);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchGenres() {
      try {
        const genresData = await getGenres();
        const genre = genresData.genres.reduce((genreMap, genre) => {
          const { id, name } = genre;
          genreMap[id] = name;
          return genreMap;
        }, []);

        setGenres(genre);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGenres();
    fetchMovies();
  }, []);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-x-8 gap-y-14 lg:gap-y-20">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          key={movie.id}
          img={movie.poster_path}
          title={movie.title}
          releaseDate={movie.release_date}
          rating={movie.vote_average}
          genre={movie.genre_ids.map((id) => genres[id]).join(', ')}
        />
      ))}
    </div>
  );
}
