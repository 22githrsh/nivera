import { useState } from "react"
import { register } from "../../services/authService"
import { useNavigate } from "react-router-dom"
import Loader from "../../components/common/Loader"

function Register() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
    const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async () => {

    try {

      await register({
        fullName,
        email,
        phone,
        password,
        role: "employer"
      })

      navigate("/verify-otp", { state: { phone } })

    } catch (err) {
      console.log(err)
    }

  }
  if(loading) return <Loader/>
  return (

    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A]">

      <div className="w-[420px] bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Create Account
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[#FE701A]"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[#FE701A]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[#FE701A]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[#FE701A]"
          />

          <button
            onClick={handleRegister}
            className="bg-[#FE701A] hover:bg-[#FE904D] text-white py-2 rounded-md font-medium transition"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?
          </p>

          <button
            onClick={() => navigate("/login")}
            className="border border-[#FE701A] text-[#FE701A] py-2 rounded-md hover:bg-[#FE701A] hover:text-white transition"
          >
            Back to Login
          </button>

        </div>

      </div>

    </div>

  )

}

export default Register