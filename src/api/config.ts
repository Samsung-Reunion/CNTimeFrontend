import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: "http://141.164.52.130:8081",
  timeout: 5000,
});

instance.interceptors.request.use(function (config) {
  const access_token = Cookies.get("access_token") ?? null;

  if (access_token) config.headers.Authorization = `Bearer ${access_token}`;

  return config;
});
