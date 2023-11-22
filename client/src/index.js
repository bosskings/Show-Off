import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { AuthContextProvider } from "./context/UsersContext";
import { ArtsContextProvider } from "./context/ArtsContext";
=======
>>>>>>> client

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
<<<<<<< HEAD
    <AuthContextProvider>
      <ArtsContextProvider>
        <App />
      </ArtsContextProvider>
    </AuthContextProvider>
=======
    <App />
>>>>>>> client
  </React.StrictMode>
  

);
