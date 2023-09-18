import React, { useState } from 'react';
import imdbLogo from '../assets/imdb.png';
import { Link } from 'react-router-dom';


const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
export default function MovieCard({
  id,
  img,
  releaseDate,
  title,
  rating,
  genre,
}) {
  const [isClicked, setIsClicked] = useState(false);
  

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  function extractYear(date) {
    const parts = date.split('-');
    if (parts.length >= 1) {
      return parts[0];
    } else {
      return null;
    }
  }

  return (
    <div
      className="h-[490px] relative flex flex-col gap-3 hover:scale-105 duration-150 transform-all ease-in-out"
      data-testid="movie-card"
    >
      <button
        type="button"
        className={`absolute flex items-center justify-center w-[30px] h-[30px] ${
          isClicked ? 'bg-rose-800' : 'bg-gray-100/50'
        } top-[3.2%] right-[6.4%] rounded-full p-1 backdrop-blur-[2px]`}
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={`${isClicked ? 'fill-rose-400': 'fill-[#D1D5DB]'}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
          ></path>
        </svg>
      </button>
      <Link to={`/movies/${id}`}>
        {' '}
        <div>
          <img
            src={`${IMG_PATH}${img}`}
            alt={title}
            loading='lazy'
            data-testid="movie-poster"
          />
        </div>
        <span
          className="text-gray-400 text-xs font-bold"
          data-testid="movie-release-data"
        >
          {extractYear(releaseDate)}
        </span>
        <h3
          className="text-gray-900 text-lg font-bold"
          data-testid="movie-title"
        >
          {title}
        </h3>
        <div className="flex space-x-2.5 items-center">
          <img src={imdbLogo} alt="imdb logo" />{' '}
          <span className="text-gray-900 text-xs leading-none">
            {(rating * 10).toFixed(1)} / 100
          </span>
        </div>
        <p className="text-gray-400 text-xs font-bold leading-none mt-1">{genre}</p>
      </Link>
    </div>
  );
}
