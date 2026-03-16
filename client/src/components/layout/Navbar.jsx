import { Link } from "react-router-dom"

function Navbar() {

  return (

    <nav className="h-[10vh] w-full bg-[#FE701A] fixed top-0 z-[9999] flex items-center justify-between px-6 text-white font-semibold">

      <h1 className="text-lg font-bold">
        Nivera
      </h1>

      <Link
        to="/login"
        className="bg-white text-[#FE701A] px-4 py-1 rounded-md hover:bg-gray-100 transition"
      >
        Login
      </Link>

    </nav>

  )

}

export default Navbar