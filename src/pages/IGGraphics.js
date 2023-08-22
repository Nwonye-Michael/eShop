import React from "react"
import "./IgGraphics.css"

function IGGraphics() {
  return (
    <div className="h-[100vh] flex justify-center">
      <div className="my-auto ">
        {" "}
        <p className="">What we can customize</p>
        <ul
          className=""
          style={{
            fontFamily: "TiltPrism",
            fontSize: "20px",
            color: "#e08dd6",
            fontWeight: "600",
          }}
        >
          <li className="">Pen</li>
          <li className="">Journals</li>
          <li className="">Wallets</li>
          <li className="">T shirts</li>
        </ul>
      </div>
    </div>
  )
}

export default IGGraphics
