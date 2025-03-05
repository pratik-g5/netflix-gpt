import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
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

  return (
    <div className="absolute p-4 z-10 bg-gradient-to-b from-black to-transparent w-full flex justify-between">
      <div className="w-40 ml-4">
        <img
          src={NETFLIX_LOGO}
          alt="Netflix"
        />
      </div>
      {user && (
        <div className="flex p-2">
          <button
            onClick={handleSignOut}
            className="my-2 p-2 text-sm bg-red-600 w-full rounded-lg hover:bg-red-700 text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
