import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSingIn);
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
        <form className="bg-black absolute z-10  my-36 mx-auto right-0 left-0 p-10 bg-opacity-70 text-white align-middle w-3/12">
          <h1 className="py-3 text-3xl">{isSingIn ? 'Sign In' : 'Sign Up'}</h1>
          {!isSingIn && (
            <input
              className="my-3 p-2 w-full"
              type="name"
              placeholder="Full Name"
            />
          )}
          <input
            className="my-3 p-2 w-full"
            type="email"
            placeholder="Email id"
          />
          <input
            className="my-3 p-2 w-full"
            type="password"
            placeholder="Password"
          />
          <button className="my-3 p-2 bg-red-600 w-full">
            {isSingIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p
            className="my-3 text-sm cursor-pointer"
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
