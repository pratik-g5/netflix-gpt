import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utils/movieSlice';
import { useEffect } from 'react';

const useGetTrailer = (id) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US',
      OPTIONS
    );

    const filterData = await data.json();

    const trailersList = filterData?.results.filter(
      (video) => video.type === 'Trailer'
    );
    const trailer = trailersList.length
      ? trailersList[0]
      : filterData?.results[0];

    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};

export default useGetTrailer;
