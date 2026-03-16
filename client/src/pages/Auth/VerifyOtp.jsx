import { useState } from "react"
import { verifyOtpService } from "../../services/authService"
import { useLocation, useNavigate } from "react-router-dom"
import Loader from "../../components/common/Loader"

function VerifyOtp(){

  const [otp,setOtp] = useState("")
  const [loading,setLoading] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const phone = location.state?.phone

  const handleVerify = async ()=>{

    try{

      setLoading(true)

      await verifyOtpService({
        phone,
        otp
      })

      navigate("/")

    }catch(err){

      console.log(err)

    }finally{

      setLoading(false)

    }

  }

  if(loading) return <Loader/>

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] px-4">

      <div className="w-full max-w-[380px] bg-white p-8 rounded-xl shadow-xl">

        <h2 className="text-2xl font-semibold text-center text-black mb-2">
          Verify OTP
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter the OTP sent to your phone
        </p>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md outline-none text-center tracking-widest text-lg focus:border-[#FE701A]"
          />

          <button
            onClick={handleVerify}
            className="bg-[#FE701A] hover:bg-[#FE904D] text-white py-2 rounded-md font-medium transition"
          >
            Verify OTP
          </button>

          <p className="text-xs text-gray-400 text-center">
            Didn't receive OTP?
          </p>

          <button
            className="text-[#FE701A] text-sm font-medium hover:underline"
          >
            Resend OTP
          </button>

        </div>

      </div>

    </div>

  )

}

export default VerifyOtp