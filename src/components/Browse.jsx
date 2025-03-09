import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies';
import useGetPopularMovies from '../utils/useGetPopularMovies';

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();

  return (
    <div className="relative">
      <Header />

      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};

export default Browse;
