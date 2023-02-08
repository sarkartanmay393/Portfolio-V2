import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVNhe2v1WPOtKFkmX375Vipe-TV2_aoy8",
  authDomain: "portfolio-v2-aa5c7.firebaseapp.com",
  projectId: "portfolio-v2-aa5c7",
  storageBucket: "portfolio-v2-aa5c7.appspot.com",
  messagingSenderId: "919743891441",
  appId: "1:919743891441:web:205970d14a394679a46650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App db={db} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
