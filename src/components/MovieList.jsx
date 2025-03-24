import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className=" px-2">
      <h1 className=" py-4 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll w-screen scrollbar-hide">
        {movies?.map((movie) => (
          <div
            key={movie?.id}
            className="w-36 pr-6 flex-shrink-0 cursor-pointer"
          >
            <MovieCard posterPath={movie?.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

// import React, { useRef } from 'react';

// const MovieList = ({ title, movies }) => {
//   const containerRef = useRef(null);

//   // Function to handle horizontal scrolling with the mouse wheel
//   const handleWheel = (e) => {
//     if (containerRef.current) {
//       e.preventDefault();
//       containerRef.current.scrollBy({
//         left: e.deltaY < 0 ? -100 : 100,
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Function to scroll left
//   const scrollLeft = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         left: -300, // Adjust scroll distance
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Function to scroll right
//   const scrollRight = () => {
//     if (containerRef.current) {
//       containerRef.current.scrollBy({
//         left: 300, // Adjust scroll distance
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col px-6 w-full relative">
//       <h1 className="py-4">{title}</h1>
//       <div
//         ref={containerRef}
//         onWheel={handleWheel}
//         className="flex overflow-x-auto scrollbar-hide"
//         style={{ scrollBehavior: 'smooth' }}
//       >
//         {movies?.map((movie) => (
//           <div
//             key={movie.id}
//             className="w-36 md:w-48 pr-4 flex-shrink-0"
//           >
//             <img
//               alt="Movie Card"
//               src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
//               className="w-full h-auto"
//             />
//           </div>
//         ))}
//       </div>
//       {/* Scroll buttons */}
//       <button
//         onClick={scrollLeft}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//       >
//         &larr;
//       </button>
//       <button
//         onClick={scrollRight}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default MovieList;
