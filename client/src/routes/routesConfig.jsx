import { lazy } from "react";
import VerifyOtpGuard from "./VerifyOtpGuard";

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const VerifyOtp = lazy(() => import("../pages/Auth/VerifyOtp"));
const Home = lazy(() => import("../Home/Home"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/verify-otp",
    element: (
      <VerifyOtpGuard>
        <VerifyOtp />
      </VerifyOtpGuard>
    )
  },


];

export default routes;