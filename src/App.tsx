/* eslint-disable react-hooks/exhaustive-deps */
// noinspection JSIgnoredPromiseFromCall

import {Navigate, Outlet, Route, Routes} from "react-router-dom"
import Home from "./app/home/Home.tsx"
import Details from "./pages/Details"
import Register from "./app/register/Register.tsx"
import Login from "./app/login/Login.tsx"
import { useDispatch } from "react-redux"
import { API, setAuthToken } from "./libs/api"
import { AUTH_ERROR } from "./store/rootReducer"
import React from "react"
import User from "./model/User"
import Follows from "./app/follows/Follows.tsx"
import Search from "./app/search/Search.tsx"
import Profile from "./app/profile/Profile.tsx"
import EditProfile from "./pages/EditProfile"

export default function App() {
  const dispatch = useDispatch()
  let user: User = {
    username: ''
  }
  if(localStorage.user) user = JSON.parse(localStorage.user)


  async function authCheck() {
    try {
      setAuthToken(localStorage.token)

      await API.get("/auth/check")
                        

    } catch (error) {
      dispatch(AUTH_ERROR())
      console.log("error" + error)
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
      <Route path="/follows" element={<Follows />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile /> } />
    </Route>

    <Route path="/" element={<IsNotLogin />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>

  </Routes>
  )
} 