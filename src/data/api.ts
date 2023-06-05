import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const apiJava = axios.create({
  baseURL: "https://mecnetapi-production.up.railway.app",
});
