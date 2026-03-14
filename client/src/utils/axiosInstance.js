import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nivera-4.onrender.com/api/v1",
  withCredentials: true,
});

export default axiosInstance;