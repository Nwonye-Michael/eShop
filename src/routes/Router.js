import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import CheckOut from "../pages/CheckOut"
import Header from "../components/Header"
import Login from "../pages/Login"
import IGGraphics from "../pages/IGGraphics"
// should just be routes since routwer is now inside app
function Router() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/checkout"
        element={
          <div>
            <Header /> <CheckOut />
          </div>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/home"
        element={
          <div>
            <Header />
            <Home />
          </div>
        }
      />
      <Route path="/add" element={<IGGraphics />} />
    </Routes>
    // </BrowserRouter>
  )
}

export default Router
