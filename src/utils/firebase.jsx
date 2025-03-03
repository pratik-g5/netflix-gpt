// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCa5A6LhsUir0zJITY3A3L7VOeNcgaKqGw',
  authDomain: 'netflixgpt-3a0c3.firebaseapp.com',
  projectId: 'netflixgpt-3a0c3',
  storageBucket: 'netflixgpt-3a0c3.firebasestorage.app',
  messagingSenderId: '351518689807',
  appId: '1:351518689807:web:990b912b63a5b7880cb17a',
  measurementId: 'G-E70V14PSMY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
