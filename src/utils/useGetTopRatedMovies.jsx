import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS } from './constants';
import { addPopularMovies, addTopRatedMovies } from './movieSlice';
import { useEffect } from 'react';

const useGetTopRatedMovies = () => {
  const getUser = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      OPTIONS
    );

    const movies = await data.json();
    dispatch(addTopRatedMovies(movies?.results));
  };
  useEffect(() => {
    if (getUser) {
      getTopRatedMovies();
    }
  }, [getUser]);
};

export default useGetTopRatedMovies;
