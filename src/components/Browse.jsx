import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies';
import useGetPopularMovies from '../utils/useGetPopularMovies';
import useGetTopRatedMovies from '../utils/useGetTopRatedMovies';

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();

  return (
    <div className="relative">
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
