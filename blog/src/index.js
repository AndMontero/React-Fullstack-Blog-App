import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQgfEMOSAgyVM75p0MlFqL9VxHktH9Lg",
  authDomain: "react-blog-app-8bf4b.firebaseapp.com",
  projectId: "react-blog-app-8bf4b",
  storageBucket: "react-blog-app-8bf4b.appspot.com",
  messagingSenderId: "402268219987",
  appId: "1:402268219987:web:fb6b7a073f0de878cb34a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
