import axios from "../utils/axiosInstance"

export const registerUser = (data) => {
  return axios.post("/auth/register", data)
}

export const loginUser = (data) => {
  return axios.post("/auth/login", data)
}

export const verifyPhoneOtp = (data) => {
  return axios.post("/auth/verify-phone", data)
}