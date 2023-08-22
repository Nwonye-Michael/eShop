import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Router from "./routes/Router"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        {/* <Header /> */}
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
