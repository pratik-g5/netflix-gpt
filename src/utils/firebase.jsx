// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA5o-79AR7-bxzjrEtHMYx21sZvz1_nsbU',
  authDomain: 'netflixgpt-25118.firebaseapp.com',
  projectId: 'netflixgpt-25118',
  storageBucket: 'netflixgpt-25118.firebasestorage.app',
  messagingSenderId: '944185804828',
  appId: '1:944185804828:web:9ef674d1bd81f822b277d9',
  measurementId: 'G-9LXLFX7FBY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
