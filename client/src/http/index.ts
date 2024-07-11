import axios from "axios";

import { API_URL } from "config";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}}`;

  return config;
});
