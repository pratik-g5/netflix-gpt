import React, { useRef, useState } from 'react';
import Header from './Header';
import validateLoginForm from '../utils/validateLoginForm';

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSingIn);
  };

  const handleButtonCLick = () => {
    const message = validateLoginForm(
      isSingIn,
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="Netflix"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black absolute z-10  my-36 mx-auto right-0 left-0 p-10 bg-opacity-70 text-white align-middle w-3/12 rounded-lg"
        >
          <h1 className="py-3 text-3xl font-bold">
            {isSingIn ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSingIn && (
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
            placeholder="Email id"
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
            {isSingIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p
            className="my-3 text-sm cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSingIn ? 'New to Netflix? Sign Up' : 'Already a User? Sign In '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
