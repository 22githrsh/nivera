import { lazy } from "react";
import VerifyOtpGuard from "./VerifyOtpGuard";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

// lazy imports
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const VerifyOtp = lazy(() => import("../pages/Auth/VerifyOtp"));
const Home = lazy(() => import("../Home/Home"));
const Profile = lazy(() => import("../pages/Profile/Profile")); // 🔥 added

const routes = [
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    path: "/verify-otp",
    element: (
      <VerifyOtpGuard>
        <VerifyOtp />
      </VerifyOtpGuard>
    )
  },

  // 🔥 PROFILE ROUTE (MAIN FIX)
  {
    path: "/profile/:username",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    )
  }
];

export default routes;