import React from 'react';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={'https://image.tmdb.org/t/p/w500' + posterPath}
      />
    </div>
  );
};

export default MovieCard;
