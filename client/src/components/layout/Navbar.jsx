import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function Navbar() {

  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate("/")
  }

  return (
    <nav className="h-[10vh] w-full bg-[#FE701A] fixed top-0 z-[9999] flex items-center justify-between px-6 text-white font-semibold">

      <h1 className="text-lg font-bold cursor-pointer" onClick={() => navigate("/")}>
        Nivera
      </h1>

      {
        user ? (
          <div className="flex items-center gap-4">

            <img
              src={user.profilePhoto || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
              alt="profile"
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
              onClick={() => navigate(`/profile/${user.username}`)}
            />

            <button
              onClick={handleLogout}
              className="bg-white text-[#FE701A] px-4 py-1 rounded-md hover:bg-gray-100 transition"
            >
              Logout
            </button>

          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-[#FE701A] px-4 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Login
          </Link>
        )
      }

    </nav>
  )
}

export default Navbar