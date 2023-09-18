import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/api';
import {
  extractYear,
  extractCast,
  extractDirector,
  extractGenre,
  extractWriter,
} from '../utils';
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

  return (
    <main className="w-full px-5 pt-5 lg:flex flex-col items-center">
      {movie && movie.videos && movie.videos.results.length > 2 && (
        <div className="overflow-hidden pb-[100%] lg:pb-[35%] rounded-[20px] relative w-full">
          <iframe
            className="absolute w-full h-full top-0 left-0"
            src={`https://www.youtube.com/embed/${movie.videos.results[2].key}`}
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="flex flex-col items-center lg:px-5 lg:flex-row mt-5">
        <section className="font-poppins font-medium mb-8">
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <div className="flex text-neutral-700 lg:text-xl font-medium font-poppins space-x-2  lg:space-x-4">
              <h2 className="" data-testid="movie-title">
                {movie.title}
              </h2>
              <span></span>•
              <span data-testid="movie-release-date">{extractYear(movie)}</span>
              <span></span>•
              <span data-testid="movie-runtime">{movie.runtime} minutes</span>
            </div>
            <div className="flex items-center space-x-2.5">
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
          <div className="mt-6 font-medium border rounded-[10px] flex flex-col lg:flex-row items-center pb-4 lg:pb-0 bg-white/80 border-[#c7c7c7] relative">
            <span className="text-white bg-rose-700 rounded-[10px] text-center py-3 px-5 w-full lg:w-60 mb-3 lg:mb-0 lg:mr-6">
              {' '}
              Top Rated movie #65
            </span>
            Awards 9 nominations{' '}
            <img
            loading='lazy'
              className="absolute hidden lg:block right-[2%] top-[20%]"
              src={arrow}
              alt="a downward arrow"
            />
          </div>
        </section>
        <section className="px-4 lg:px-3 mb-8 lg:mb-5">
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
            <img src={poster} loading="lazy" alt="poster showing 3 different movies" />
            <div className="absolute space-x-3 w-full flex items-center justify-center bottom-0 left-0 py-3 bg-[#121212]/50 text-[#a8a1a1] font-medium text-sm leading-normal backdrop-blur-[2px] rounded-[10px]">
              <img src={listBlack} alt="list" />{' '}
              <span>The Best Movies and Shows in September</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
