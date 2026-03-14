import { useState } from "react"
import { login } from "../../services/authService"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async ()=>{

    try{

      const res = await login({
        email,
        password
      })

      console.log(res)

      navigate("/home")

    }catch(err){
      console.log(err)
    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">

      <div className="w-[380px] bg-white p-8 rounded-xl shadow-2xl">

        <h2 className="text-2xl font-semibold text-center text-[#1a1a1a] mb-6">
          Login to Nivera
        </h2>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#FE701A]"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-[#FE701A]"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-[#FE701A] hover:bg-[#FE904D] text-white py-2 rounded-md font-medium transition duration-200"
          >
            Login
          </button>

        </div>

      </div>

    </div>

  )

}

export default Login