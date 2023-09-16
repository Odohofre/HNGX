import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      navigate(`/search-results?query=${query}`);
    }
  };

  return (
    <form className="relative lg:w-[32rem]">
      <input
        type="search"
        className="rounded-md w-full bg-transparent border-[2px] border-gray-300 text-white px-2.5 py-1.5 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        placeholder="What do you want to watch?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 flex-shrink-0 text-white"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </form>
  );
}
