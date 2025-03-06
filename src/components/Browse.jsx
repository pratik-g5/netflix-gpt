import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetNowPlaying from '../utils/useGetNowPlaying';

const Browse = () => {
  useGetNowPlaying();

  return (
    <div className="relative">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
