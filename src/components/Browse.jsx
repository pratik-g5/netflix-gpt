import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies';
import useGetPopularMovies from '../utils/useGetPopularMovies';
import useGetTopRatedMovies from '../utils/useGetTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();

  const showGpt = useSelector((store) => store?.gpt.gptSearchView);

  return (
    <div className="relative">
      <Header showGpt={showGpt} />
      {showGpt ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
