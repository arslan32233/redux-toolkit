import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Welcome, {user?.name || "User"} 👋</h2>
        <p className="text-gray-600">
          You are logged in as <span className="font-medium">{user?.role || "Role"}</span>.
        </p>
      </div>
    </div>
  );
}
