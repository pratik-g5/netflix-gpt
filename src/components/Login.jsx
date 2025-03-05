import React, { useRef, useState } from 'react';
import Header from './Header';
import validateLoginForm from '../utils/validateLoginForm';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_BODY_BACKGROUND } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonCLick = () => {
    const message = validateLoginForm(
      isSignIn,
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: name?.current?.value,
          });
        })
        .then(() => {
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '- ' + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '- ' + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BODY_BACKGROUND}
          alt="Netflix"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black absolute z-10  my-36 mx-auto right-0 left-0 p-10 bg-opacity-80 text-white align-middle w-3/12 rounded-lg"
        >
          <h1 className="py-3 text-3xl font-bold">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="my-3 p-2 w-full bg-gray-600"
              type="name"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="my-3 p-2 w-full bg-gray-600 "
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="my-3 p-2 w-full bg-gray-600"
            type="password"
            placeholder="Password"
          />
          <p className="py-2 text-red-500 font-semibold">{errorMessage}</p>
          <button
            className="my-3 p-2 bg-red-600 w-full rounded-lg hover:bg-red-700"
            onClick={handleButtonCLick}
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p
            className="my-3 text-sm cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? 'New to Netflix? Sign Up Now'
              : 'Already a User? Sign In Now'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
