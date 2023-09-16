import MovieList from './MovieList';

export default function Movies() {
  return (
    <main className="px-20 py-[70px]">
      <div className="flex justify-between mb-11">
        <h2 className="text-4xl font-bold">Featured Movie</h2>
        <a
          href="#"
          className="flex items-center text-rose-700 text-lg leading-[24px]"
        >
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
              stroke="#B91C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{' '}
        </a>
      </div>
      <MovieList />
    </main>
  );
}
