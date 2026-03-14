import { useState } from "react"
import { register } from "../../services/authService"
import { useNavigate } from "react-router-dom"

function Register() {

  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = async () => {

    try {

      await register({
        fullName,
        email,
        phone,
        password,
        role:"employer"
      })

      navigate("/verify-otp",{state:{phone}})

    } catch(err){

      console.log(err)

    }

  }

  return(

    <div>

      <h2>Register</h2>

      <input
      placeholder="Full Name"
      onChange={(e)=>setFullName(e.target.value)}
      />

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      placeholder="Phone"
      onChange={(e)=>setPhone(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  )

}

export default Register