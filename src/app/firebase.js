// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqrLvBlAyQxpcYRHzTL7wsLm82NkGVPq0",
  authDomain: "ai---firebase.firebaseapp.com",
  projectId: "ai---firebase",
  storageBucket: "ai---firebase.appspot.com",
  messagingSenderId: "252624502432",
  appId: "1:252624502432:web:6ea9b220adb9be96c593c5",
  measurementId: "G-FLTR6YSNKW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);