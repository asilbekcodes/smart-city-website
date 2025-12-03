// api.ts
import axios from "axios";
import i18n from "../locales/config";


 const API_BASE_URL = "https://45.138.158.158:4443/api/"; // global server

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Har bir requestga til va token qo'shish 
api.interceptors.request.use((config) => {
  const currentLang = i18n.language || "uz";
  config.headers["Accept-Language"] = currentLang;

  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // ✅ faqat shu ishlatiladi
  } else {
    console.log(`⚠️ No token found in localStorage for ${config.method?.toUpperCase()} ${config.url}`);
  }
  return config;
});

// Xatoliklarni boshqarish
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const url = error.config?.url;
      // Logout endpoint uchun 401 xatoliklarni e'tiborsiz qoldirish
      if (url?.includes('/auth/logout')) {
        console.log("Logout endpoint 401 - bu kutishilgan xabar");
      } else {
        console.error("Unauthorized request - token expired or invalid");
        // Token expired - redirect to login will be handled by components
      }
    }
    return Promise.reject(error);
  }
);

export default api;