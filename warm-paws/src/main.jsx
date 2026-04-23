import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import './index.css'
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css?inline'
import './index.css'

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </BrowserRouter>
);