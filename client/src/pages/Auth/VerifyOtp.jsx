import { useState } from "react"
import { verifyOtpService } from "../../services/authService"
import { useLocation,useNavigate } from "react-router-dom"

function VerifyOtp(){

const [otp,setOtp] = useState("")

const location = useLocation()
const navigate = useNavigate()

const phone = location.state?.phone

const handleVerify = async ()=>{

try{

await verifyOtpService({
 phone,
 otp
})

navigate("/home")

}catch(err){

console.log(err)

}

}

return(

<div>

<h2>Verify Phone OTP</h2>

<input
placeholder="Enter OTP"
onChange={(e)=>setOtp(e.target.value)}
/>

<button onClick={handleVerify}>
Verify OTP
</button>

</div>

)

}

export default VerifyOtp