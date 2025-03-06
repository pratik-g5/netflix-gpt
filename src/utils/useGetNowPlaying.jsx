import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from './constants';
import { addMovies } from './movieSlice';
import { useEffect } from 'react';

const useGetNowPlaying = () => {
  const getUser = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  const getMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?&page=1',
      OPTIONS
    );

    const movies = await data.json();
    dispatch(addMovies(movies?.results));
  };
  useEffect(() => {
    if (getUser) {
      getMovies();
    }
  }, [getUser]);
};

export default useGetNowPlaying;
