import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosPublic.defaults.headers.common["Content-Type"] = "application/json";

axiosPublic.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  error => Promise.reject(error),
);
