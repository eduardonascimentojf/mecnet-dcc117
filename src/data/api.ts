import axios from "axios";
export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

export const apiJava = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
