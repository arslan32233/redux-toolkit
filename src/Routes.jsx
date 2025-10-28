import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx"; // optional, agar bana liya hai

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected/Home route (for testing after login) */}
      <Route path="/home" element={<Home />} />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
