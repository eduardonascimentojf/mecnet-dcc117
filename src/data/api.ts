import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const apiJava = axios.create({
  // baseURL: "https://mecnetapi-production.up.railway.app",
  baseURL: "https://106b-45-224-39-32.ngrok-free.app",
});
