import React, { useState, useEffect } from 'react';
import imdbLogo from '../assets/imdb.png';
import rottenTomatoesLogo from '../assets/rotten_Tomatoes.png';

export default function HeroDescription({movie}) {
  const [isVisible, setIsVisible] = useState(false);

  // Add a delay to simulate the slide-in animation
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <article className={`flex bg-black/50 p-10 flex-col gap-4 max-w-[25rem] ${isVisible ? 'ml-[10%] lg:ml-[8%]' : '-ml-96'} transition-all duration-1000 ease-in-out m-auto`}>
      <h2 className="text-5xl leading-[56px] font-bold">
        {movie.title}
      </h2>
      <div className="flex space-x-9">
        <div className="flex text-xs space-x-2.5">
          <img src={imdbLogo} alt="imdb logo" /> <span>86.0 / 100</span>
        </div>
        <div className="flex text-xs space-x-2.5">
          <img src={rottenTomatoesLogo} alt="rotten tomatoes logo" />{' '}
          <span>97%</span>
        </div>
      </div>
      <p className="text-sm leading-[18px] w-[302px] font-medium">
        {movie.overview}
      </p>
      {movie.videos && movie.videos.results.length > 0 && ( <a
        href={`https://www.youtube.com/watch?v=${movie.videos.results[1].key}`}
        target='_blank'
        className="w-44 bg-rose-700 px-4 py-1.5 rounded-md inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="mr-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
            fill="white"
          />
        </svg>
        WATCH TRAILER
      </a>)}
     
    </article>
  );
}
