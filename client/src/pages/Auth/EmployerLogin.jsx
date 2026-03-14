import { useState } from "react";
import { employerLoginService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function EmployerLogin(){

const [email,setEmail] = useState("");

const navigate = useNavigate();

const handleLogin = async ()=>{

await employerLoginService({email})

navigate("/verify-otp",{state:{email}})

}

return(

<div>

<h2>Employer Login</h2>

<input
placeholder="Employer Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<button onClick={handleLogin}>
Send OTP
</button>

</div>

)

}

export default EmployerLogin