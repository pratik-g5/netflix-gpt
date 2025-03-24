import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const getMovie = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!getMovie) return;

  const mainMovie = getMovie[4];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative">
      <VideoTitle
        title={title}
        overview={overview}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
