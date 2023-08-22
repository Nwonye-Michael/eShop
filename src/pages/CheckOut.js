import React from "react"
import CheckOutProduct from "../components/CheckOutProduct"
import SubTotal from "../components/SubTotal"
import { useStateValue } from "../state/StateProvider"

function CHeckOut() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="checkout flex p-5 bg-white h-max">
      <div className="checkout__left flex flex-col w-[70vw]">
        <div className="checkout__ad w-full h-44 mb-3 bg-[url('https://cdnb.artstation.com/p/assets/images/images/040/066/339/small/sam-chon-bo-coldwar-mtx-callingcard-aerobics.jpg?1627758253')] bg-no-repeat  bg-center "></div>

        <div className="">
          <h2 className="checkout__title mr-3 p-3 border-b-gray-200 text-sm font-semibold">
            Your Shopping basket
          </h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckOutProduct>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  )
}

export default CHeckOut
