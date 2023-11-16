import axios from "axios";

export const API_URL = "http://localhost:5000/";

export const api = axios.create({
  baseURL: API_URL,
});

export const loginCheck = async (email, password) => {
  try {
    const response = await api.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, nama_depan, nama_belakang, password) => {
  try {
    const response = await api.post("/api/register", {
      email,
      nama_depan,
      nama_belakang,
      password,
      role_id: 1,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
