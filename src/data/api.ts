import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const apiDB = axios.create({
  baseURL: "http://localhost:3000",
});
