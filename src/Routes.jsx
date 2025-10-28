import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx";  

export default function AppRoutes() {
  return (
    <Routes>
   
      <Route path="/" element={<Navigate to="/login" replace />} />

     
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
