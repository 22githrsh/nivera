import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <div className="pt-[10vh]">
        <AppRoutes />
      </div>

    </BrowserRouter>

  )

}

export default App