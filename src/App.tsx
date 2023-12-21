import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Register from "./pages/Register"

export default function App() {
  return (
  <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/details/:id" element={<Details />} />
    <Route path="/register" element={<Register />} />
  </Routes>
  )
} 