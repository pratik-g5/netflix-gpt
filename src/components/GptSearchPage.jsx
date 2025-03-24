import React from 'react';
import { LOGIN_BODY_BACKGROUND } from '../utils/constants';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchPage = () => {
  const langId = useSelector((store) => store?.config.language);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute">
        <img
          src={LOGIN_BODY_BACKGROUND}
          alt="Netflix"
        />
      </div>
      <div className="flex absolute w-6/12 items-center justify-center bg-black p-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="bg-slate-200 px-4 py-2 mr-4 w-96 rounded-md"
            type="text"
            placeholder={lang[langId].gptsearchPlaceholder}
          />
          <button className="bg-red-700 p-2 w-24 rounded-lg cursor-pointer text-white hover:bg-red-900">
            {lang[langId].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchPage;
