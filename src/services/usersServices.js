import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}api/users`);
  return response.data;
};
