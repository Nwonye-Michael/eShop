import React from "react"
import "./Header.css"
import { BsFillBasket2Fill } from "react-icons/bs"

import { BiStoreAlt, BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useStateValue } from "../state/StateProvider"

function Header() {
  // ytry putting the header inside the router to solve the link problme
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="header ">
      <Link to="./" className="my-auto">
        {" "}
        <div className="header__logo ">
          <BiStoreAlt className="header__logoimage" size="40" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <div className="header__searchIconbox">
          <BiSearch className="header__searchIcon" />
        </div>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          {" "}
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__itemm">
          <span className="nav__itemone">
            <Link to="/checkout">
              {" "}
              <BsFillBasket2Fill />
            </Link>
          </span>
          <span className="nav__itemtwo">{basket.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
