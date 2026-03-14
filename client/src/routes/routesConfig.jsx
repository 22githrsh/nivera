import { lazy } from "react";

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const VerifyOtp = lazy(() => import("../pages/Auth/VerifyOtp"));
const Home = lazy(() => import("../Home/Home"));

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify-otp", element: <VerifyOtp /> },
  { path: "/home", element: <Home /> }
];

export default routes;