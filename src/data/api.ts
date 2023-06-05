import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const apiJava = axios.create({
  baseURL: "mecnetapi-production.up.railway.app",
});
