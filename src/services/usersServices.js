import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllUsers = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    throw error.response?.data || error;
  }
};
