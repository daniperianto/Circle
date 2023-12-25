import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Test from "./pages/Test"
import { useDispatch } from "react-redux"
import { API, setAuthToken } from "./libs/api"
import { AUTH_ERROR } from "./store/rootReducer"
import React from "react"
import User from "./model/User"

export default function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let user: User = {
    username: ''
  }
  if(localStorage.user) user = JSON.parse(localStorage.user)


  async function authCheck() {
    try {
      setAuthToken(localStorage.token)

      await API.get("/check")
                        
                        

      

    } catch (error) {
      dispatch(AUTH_ERROR())
      console.log("error" + error)
      navigate("/login")
    }
  }

  React.useEffect(() => {
    authCheck()
  }, [])

  function IsLogin() {
    if(!user.username) {
      return <Navigate to={'/login'} />
    }

    return <Outlet />
  }

  function IsNotLogin() {
    if(user.username) {
      return <Navigate to={'/'} />
    }

    return <Outlet />
  }


  return (
  <Routes >
    <Route path="/" element={<IsLogin />}>
      <Route path="/" element={<Home /> }/>
      <Route path="/details/:id" element={<Details />} />
    </Route>

    <Route path="/" element={<IsNotLogin />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
      
    <Route path="/test" element={<Test />} />
  </Routes>
  )
} 