import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-56 md:pl-8 relative">
          <MovieList
            title={'Now Playing'}
            movies={movies?.nowPlayingMovies}
          />
          <MovieList
            title={'Now Playing'}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
