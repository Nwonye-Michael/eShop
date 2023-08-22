import React from "react"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../state/StateProvider"
import { getBasketTotal } from "../state/reducer"

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="subtotal flex flex-col justify-between w-[300px] h-[100px]   px-5 py-3 bg-[#f3f3f3] border rounded-[3px] ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
              <small className="subtotal__gift flex items-center">
                {" "}
                <input type="checkbox" className="mr-1" />
                This order contains a gist
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="bg-[#ff9f00] rounded-sm w-full h-8 mt-2  text-sm"
        onClick={console.log(basket)}
      >
        Proceed to checkout
      </button>
    </div>
  )
}

export default SubTotal
