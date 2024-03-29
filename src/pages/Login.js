import React, { useState } from "react"
import { Link, useHistory, useNavigate, useNavigation } from "react-router-dom"
import { BiStoreAlt } from "react-icons/bi"
import { auth } from "../components/FireBase"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

function Login() {
  // const history = useHistory()
  const history = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        history("/")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          history("/")
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login flex flex-col h-[100vh] items-center text-left ">
      <Link to="/" className="not-italic no-underline mt-10">
        {" "}
        <div className="login_logo flex my-3 mx-0">
          <BiStoreAlt
            className="login__logoImage text-[#ff9f00]"
            size={30}
          ></BiStoreAlt>
          <div className="login__logoTitle text-black">eShop</div>
        </div>
      </Link>
      <div className="login__container flex flex-col h-fit w-80  p-10 border-2 ">
        <h1 className="text-2xl mb-4 font-semibold">Sign-in</h1>

        <form className=" flex flex-col">
          <h5 className="text-xs font-bold  mb-3">E-mail</h5>
          <input
            type="text"
            value={email}
            className="border-black border-[1.5px] rounded-md mb-3 p-1 text-xs"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <h5 className="text-xs font-bold  mb-3">Password</h5>
          <input
            type="password"
            className="border-black border-[1.5px] rounded-md mb-3 p-1 text-xs"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              signIn(e)
            }}
            className="login__signInButton rounded-md bg-[#ff9f00] border w-fit mx-auto text-sm px-4 py-1 mb-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-[9px] font-medium mb-3">
          By signing-in you agree to the terms and conditions of use & sale of
          eShop website Click to see our Privacy & Cookie notice and our
          Intrest-Based Ads Notice
        </p>
        <button
          className="login__registerButton border bg-slate-100 "
          onClick={(e) => {
            register(e)
          }}
        >
          Create your eShop Account
        </button>
      </div>
    </div>
  )
}

export default Login
