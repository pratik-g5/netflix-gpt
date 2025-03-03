import React from 'react';

const validateLoginForm = (isSingIn, name, email, password) => {
  if ((!isSingIn && !name) || !email || !password) {
    return 'All fields are required';
  }

  const isNameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) {
    return 'Name is invalid !';
  }

  if (!isEmailValid || !isPasswordValid) {
    return 'Email or Password is invalid !';
  }
  return null;
};

export default validateLoginForm;
