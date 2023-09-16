import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchMovie, getGenres } from '../api/api';
import MovieCard from './MovieCard';

export default function ResultPage() {
  const [movieResults, setMovieResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    if (query) {
      async function fetchResult(query) {
        try {
          const movieResult = await searchMovie(query);
          setMovieResults(movieResult.results);
        } catch (error) {
          console.error('Error searching for movies: ', error);
        } finally {

          setLoading(false);
        }
      }

      fetchResult(query);
    } else {setMovieResults([])}

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
  }, [location.search]);

  return (
    <main className="px-5">
      <h1 className="text-3xl font-medium my-5">Search Results</h1>
      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              strokeWidth="10"
              r="35"
              stroke="#BE123C"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur="2s"
                repeatCount="indefinite"
                from="0"
                to="502"
              ></animate>
            </circle>
          </svg>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-x-8 gap-y-24 pb-8">
          {movieResults.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              genre={movie.genre_ids.map((id) => genres[id]).join(', ')}
            />
          ))}
        </div>
      )}
    </main>
  );
}
