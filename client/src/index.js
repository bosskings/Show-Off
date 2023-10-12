import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/UsersContext";
import { ArtsContextProvider } from "./context/ArtsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <AuthContextProvider>
      <ArtsContextProvider>
        <App />
      </ArtsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
  

);
