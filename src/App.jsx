import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./Routes.jsx";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}
