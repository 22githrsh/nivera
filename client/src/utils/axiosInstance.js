import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://nivera-4.onrender.com/api/v1"
})

// ==================== REQUEST INTERCEPTOR ====================

axiosInstance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token")

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)


// ==================== RESPONSE INTERCEPTOR ====================

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {

    const originalRequest = error.config

    // agar 401 aaya aur retry nahi hua
    if (error.response?.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true

      try {

        const refreshToken = localStorage.getItem("refreshToken")

        // refresh API call
        const res = await axios.post(
          "https://nivera-4.onrender.com/api/v1/auth/refresh-token",
          { refreshToken }
        )

        const newAccessToken = res.data.accessToken

        // save new token
        localStorage.setItem("token", newAccessToken)

        // update header
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

        // retry original request
        return axiosInstance(originalRequest)

      } catch (err) {

        // refresh bhi fail → logout
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")

        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance