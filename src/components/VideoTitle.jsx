import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-44 pl-16 absolute bg-gradient-to-r from-black/50 text-white w-screen aspect-video">
      <div className="rounded-lg bg-black bg-opacity-35 shadow-lg w-80 p-2 items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className=" text-sm">{overview}</p>
        <div className="pt-4">
          <button className="bg-white text-black p-2 px-8 rounded-md hover:opacity-70">
            ▷ Play
          </button>
          <button className="bg-gray-500 text-white p-2 px-6 mx-3 rounded-md hover:opacity-70">
            ⓘ More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
