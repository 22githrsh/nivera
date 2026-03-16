import { Navigate, useLocation } from "react-router-dom";

function VerifyOtpGuard({ children }) {

  const location = useLocation();


  if (!location.state?.phone) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default VerifyOtpGuard;