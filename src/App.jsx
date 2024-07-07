import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"

function App() {

  return (
    <>
      {/* <Dashboard /> */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
