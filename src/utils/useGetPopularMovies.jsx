import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from './constants';
import { addPopularMovies } from './movieSlice';
import { useEffect } from 'react';

const useGetPopularMovies = () => {
  const getUser = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?&page=1',
      OPTIONS
    );

    const movies = await data.json();
    dispatch(addPopularMovies(movies?.results));
  };
  useEffect(() => {
    if (getUser) {
      getPopularMovies();
    }
  }, [getUser]);
};

export default useGetPopularMovies;
