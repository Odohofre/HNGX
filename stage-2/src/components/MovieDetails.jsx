import React from 'react';
import MoviePage from './MoviePage';
import SideBar from './SideBar';

export default function MovieDetails() {
  return (
    <main className="flex h-screen">
      <SideBar />
      <MoviePage />
    </main>
  );
}
