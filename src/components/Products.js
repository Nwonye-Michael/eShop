import React from "react"
import "./Products.css"
import { useStateValue } from "../state/StateProvider"

function Products({ id, price, image, rating, title }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  function createStars(numStars) {
    if (numStars <= 0) {
      return ""
    }

    const star = "⭐"
    return star.repeat(numStars)
  }
  return (
    <div
      id={id}
      className="product flex flex-col items-center justify-end m-4 p-2 w-full max-h-[400px] min-w-[100px] bg-white z-[1] "
    >
      <div className="product__info mb-1 h-[100px]">
        <p className="w-[]">{title}</p>
        <p className="product__price mt-[5px] text-left">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating flex">{createStars(rating)}</div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1441123285228-1448e608f3d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="product"
        className="max-h-[200px] w-full object-contain mt-[20px] mr-0 mb-0 ml-[15px]  "
      />
      <button
        className="bg-[#ff9f00]  mt-[10px] text-[#111] px-3 rounded-md"
        onClick={addToBasket}
      >
        Add
      </button>
    </div>
  )
}

export default Products
