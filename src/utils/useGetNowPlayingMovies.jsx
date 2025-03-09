import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from './constants';
import { addNowPlayingMovies } from './movieSlice';
import { useEffect } from 'react';

const useGetNowPlayingMovies = () => {
  const getUser = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?&page=1',
      OPTIONS
    );

    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies?.results));
  };
  useEffect(() => {
    if (getUser) {
      getMovies();
    }
  }, [getUser]);
};

export default useGetNowPlayingMovies;
