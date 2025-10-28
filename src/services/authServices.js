import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginUser = async ({ email, password }) => {
  const res = await axios.post(`${BASE_URL}api/auth/login`, { email, password });
  return res.data;
};
export const signupUser = async (payload) => {
  const response = await axios.post(`${BASE_URL}api/auth/signup`, payload);
  return response.data;
};


