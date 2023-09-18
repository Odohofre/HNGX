export function extractYear(movieData) {
  if (movieData.release_date && movieData.release_date.length > 1) {
    const parts = movieData.release_date.split('-');
    if (parts.length >= 1) {
      return parts[0];
    } else {
      return '';
    }
  }
}

export function extractGenre(movieData) {
  if (movieData && movieData.genres && movieData.genres.length > 0) {
    return movieData.genres.map((genre) => (
      <span
        className="text-[15px] text-red-700 border rounded-[15px] px-3 lg:px-[17px] py-1"
        key={genre.name}
      >
        {genre.name}
      </span>
    ));
  }
  return <span>No genres</span>;
}

export function extractDirector(movieData) {
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

export function extractCast(movieData) {
  if (movieData && movieData.credits && movieData.credits.cast) {
    const actors = movieData.credits.cast
      .slice(0, 3)
      .map((member) => member.name)
      .join(', ');
    return <span className="text-rose-700">{actors}</span>;
  }
  return '';
}

export function extractWriter(movieData) {
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
