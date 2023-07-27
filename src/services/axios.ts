import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API;

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30 * 100,
});
