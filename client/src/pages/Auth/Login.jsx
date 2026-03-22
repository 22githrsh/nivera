import { useState } from "react"
import { login } from "../../services/authService"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/common/Loader"
import { useAuth } from "../../context/AuthContext"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { setUser } = useAuth()

const handleLogin = async () => {
  try {
    setLoading(true)

    const res = await login({
      email,
      password
    })

    const user = res.data.user

    localStorage.setItem("token", res.data.accessToken)
    localStorage.setItem("refreshToken", res.data.refreshToken)

    setUser(user)

    navigate(`/profile/${user.username}`)

  } catch (err) {
    console.log(err)
  } finally {
    setLoading(false)
  }
}

  if (loading) return <Loader />

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">

      <div className="w-[380px] bg-white p-8 rounded-xl shadow-2xl">

        <h2 className="text-2xl font-semibold text-center text-[#1A1A1A] mb-6">
          Login to Nivera
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#FE701A]"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-md px-4 py-2 w-full outline-none focus:border-[#FE701A]"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>

          </div>

          <button
            onClick={handleLogin}
            className="bg-[#FE701A] hover:bg-[#FE904D] text-white py-2 rounded-md font-medium transition"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?
          </p>

          <button
            onClick={() => navigate("/register")}
            className="border border-[#FE701A] text-[#FE701A] py-2 rounded-md hover:bg-[#FE701A] hover:text-white transition"
          >
            Register your account
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login