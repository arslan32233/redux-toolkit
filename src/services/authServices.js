import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const loginUserAPI = async ({ email, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}api/auth/login`, { email, password });
    return res.data; 
  } catch (error) {
    throw error.response?.data || error;
  }
};


export const validateTokenAPI = async (token) => {
  try {
    const res = await axios.get(`${BASE_URL}api/auth/validate-token`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; 
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const signupUserAPI = async (payload) => {
  try {
    const res = await axios.post(`${BASE_URL}api/auth/signup`, payload);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
