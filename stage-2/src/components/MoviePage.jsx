import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/api';
import arrow from '../assets/Expand Arrow.png';
import star from '../assets/Star.png';
import tickets from '../assets/Two Tickets.png';
import poster from '../assets/tri-posters.png';
import list from '../assets/List.png';
import listBlack from '../assets/List_2.png';

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails(id) {
      try {
        const movieDetail = await getMovieDetails(id);
        setMovie(movieDetail);
      } catch (error) {
        console.log('Error fetching movie details', error);
      }
    }

    fetchMovieDetails(id);
  }, [id]);

  function extractYear(movieData) {
    if (movieData.release_date && movieData.release_date.length > 1) {
      const parts = movieData.release_date.split('-');
      if (parts.length >= 1) {
        return parts[0];
      } else {
        return '';
      }
    }
  }

  function extractGenre(movieData) {
    if (movieData && movieData.genres && movieData.genres.length > 0) {
      return movieData.genres.map((genre) => (
        <span
          className="text-[15px] text-red-700 border rounded-[15px] px-[17px] py-1"
          key={genre.name}
        >
          {genre.name}
        </span>
      ));
    }
    return <span>No genres</span>;
  }

  function extractDirector(movieData) {
    if (movieData && movieData.credits && movieData.credits.crew) {
      const director = movieData.credits.crew.find(
        (person) => person.job === 'Director'
      );
      return director ? (
        <span className="text-rose-700">{director.name}</span>
      ) : (
        ''
      );
    }
    return '';
  }

  function extractCast(movieData) {
    if (movieData && movieData.credits && movieData.credits.cast) {
      const actors = movieData.credits.cast
        .slice(0, 3)
        .map((member) => member.name)
        .join(', ');
      return <span className="text-rose-700">{actors}</span>;
    }
    return '';
  }

  function extractWriter(movieData) {
    if (movieData && movieData.credits && movieData.credits.crew) {
      const writerSet = new Set(); // Use a set to ensure uniqueness
      const writers = movieData.credits.crew
        .filter((person) => person.department === 'Writing')
        .map((writer) => writer.name);

      // Add writers to the set to ensure uniqueness
      writers.forEach((writer) => writerSet.add(writer));

      const uniqueWriter = Array.from(writerSet).join(', ');
      return <span className="text-rose-700">{uniqueWriter}</span>;
    }
    return '';
  }

  return (
    <main className="w-screen px-5 pt-5 flex flex-col items-center">
      {movie && movie.videos && movie.videos.results.length > 2 && (
        <div className="overflow-hidden pb-[35%] rounded-[20px] relative w-full">
          <iframe
            className="absolute w-full h-full top-0 left-0"
            src={`https://www.youtube.com/embed/${movie.videos.results[2].key}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="flex flex-col lg:flex-row mt-5">
        <section className="font-poppins font-medium mb-8">
          <div className="flex space-x-4">
            <div className="flex text-neutral-700 text-xl font-medium font-poppins  space-x-4">
              <h2 className="" data-testid="movie-title">
                {movie.title}
              </h2>
              <span></span>•
              <span data-testid="movie-release-date">{extractYear(movie)}</span>
              <span></span>•
              <span data-testid="movie-runtime">{movie.runtime} minutes</span>
            </div>
            <div className="flex items-center  space-x-2.5">
              {extractGenre(movie)}
            </div>
          </div>
          <p
            className="text-[#333] text-lg leading-normal font-normal mt-6"
            data-testid="movie-overview"
          >
            {movie.overview}
          </p>
          <div className="flex flex-col space-y-4 mt-6 text-[#333] leading-normal">
            <p>Director: {extractDirector(movie)}</p>
            <p>Writers: {extractWriter(movie)}</p>
            <p>Stars: {extractCast(movie)}</p>
          </div>
          <div className="mt-6 font-medium border rounded-[10px] flex items-center bg-white/80 border-[#c7c7c7]  relative">
            <span className="text-white bg-rose-700 rounded-[10px] py-3 px-5 mr-6">
              {' '}
              Top Rated movie
            </span>
            Awards 9 nominations{' '}
            <img
              className="absolute right-[2%] top-[20%]"
              src={arrow}
              alt="a downward arrow"
            />
          </div>
        </section>
        <section className="px-3 mb-5">
          <div className="flex justify-end">
            <img src={star} alt="star" />
            <p className="text-[#e8e8e8] font-medium text-xl ml-2">
              <span className="text-[#666] text-lg">{movie.vote_average}</span>{' '}
              | {(movie.vote_count / 1000).toFixed(0)}K
            </p>
          </div>
          <button
            type="button"
            className="mt-6 bg-rose-700 text-white flex items-center justify-center  space-x-2.5 font-medium py-2.5 rounded-[10px] w-[360px]"
          >
            <img src={tickets} alt="white tickets" />
            <span>See Showtimes</span>
          </button>
          <button
            type="button"
            className="mt-2 bg-rose-700/10 border-rose-700 space-x-2.5 text-[#333] font-medium flex items-center justify-center py-2.5 rounded-[10px] w-[360px]"
          >
            <img src={list} alt="list" />
            <span>More watch options</span>
          </button>
          <div className="flex-shrink-0 mt-8 relative">
            <img src={poster} alt="poster showing 3 different movies" />
            <div className="absolute space-x-3 w-full flex items-center justify-center bottom-0 left-0 py-3 bg-[#121212]/50 text-[#e8e8e8] font-medium text-sm leading-normal backdrop-blur-[2px] rounded-[10px]">
              <img src={listBlack} alt="list" />{' '}
              <span>The Best Movies and Shows in September</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}