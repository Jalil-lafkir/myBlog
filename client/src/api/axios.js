import axios from "axios";
export const api = axios.create({
  baseURL: "https://myblooog.onrender.com",
  withCredentials: true,
});
