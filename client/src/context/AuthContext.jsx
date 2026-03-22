import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.log("Invalid user in localStorage")
        localStorage.removeItem("user")
      }
    }

    setLoading(false)
  }, [])

  const loginUser = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logoutUser = () => {
    setUser(null)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    localStorage.removeItem("refreshToken")
  }

  return (
    <AuthContext.Provider value={{ user, setUser: loginUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)