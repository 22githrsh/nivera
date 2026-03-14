import * as authApi from "../api/authApi"

export const register = async (data) => {
  const res = await authApi.registerUser(data)
  return res.data
}

export const login = async (data) => {
  const res = await authApi.loginUser(data)
  return res.data
}

export const verifyOtpService = async (data) => {
  const res = await authApi.verifyPhoneOtp(data)
  return res.data
}