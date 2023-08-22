import React from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { useStateValue } from "../state/StateProvider"

function CheckOutProduct({ id, title, price, rating, image }) {
  function createStars(numStars) {
    if (numStars <= 0) {
      return ""
    }

    const star = "⭐"
    return star.repeat(numStars)
  }
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div className="checkoutproduct flex my-5" id={id}>
      <img
        src={image}
        alt="product"
        className="checkoutproduct__image object-contain w-[180px] h-[180px]"
      />
      <div className="checkoutproduct__info pl-5">
        {" "}
        <p className="checkoutProduct__title text-base font-semibold mt-6">
          {title}
        </p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating flex">
          {createStars(rating)}
        </div>
        <button
          className=" hover:scale-[1.2] hover:font-bold "
          onClick={removeFromBasket}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default CheckOutProduct
