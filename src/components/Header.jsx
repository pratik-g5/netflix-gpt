import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../redux/gptSlice';
import { changeLanguage } from '../redux/configSlice';

const Header = ({ showGpt }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute p-4 z-10 bg-gradient-to-b from-black to-transparent justify-between w-full flex ">
      <div className="w-40 ml-4">
        <img
          src={NETFLIX_LOGO}
          alt="Netflix"
        />
      </div>
      {user?.uid && (
        <div className="flex p-2 justify-end items-end w-96 space-x-4">
          {showGpt && (
            <select
              className="bg-gray-900 text-white p-2 rounded-lg cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option
                    className="cursor-pointer"
                    key={lang.identifier}
                    value={lang.identifier}
                  >
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="flex-1 mr-5 p-2 bg-sky-700 rounded-lg hover:bg-sky-900 text-white"
            onClick={handleToggleGptSearch}
          >
            {showGpt ? 'Home' : 'GPT Search'}
          </button>
          <button
            onClick={handleSignOut}
            className="flex-none p-2 bg-red-600 rounded-lg hover:bg-red-700 text-white w-20 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
