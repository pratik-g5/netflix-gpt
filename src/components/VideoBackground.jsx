import { useSelector } from 'react-redux';
import useGetTrailer from '../utils/useGetTrailer';

const VideoBackground = ({ movieId }) => {
  useGetTrailer(movieId);

  const video = useSelector((store) => store.movies?.trailer);

  if (!video) return;
  const { key } = video;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          key +
          '?&autoplay=1&mute=1&loop=1&playlist=' +
          key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
