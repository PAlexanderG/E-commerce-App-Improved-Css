import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const {
    removeFromCart,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);

  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-4 items-center">
      
      {/* Image */}
      <img src={image} alt={title} className="w-20" />

      {/* Info */}
      <div className="flex-1">
        <h4 className="text-sm font-medium">{title}</h4>

        {/* Quantity Controls */}
        <div className="flex items-center gap-x-3 mt-2">
          <button
            onClick={() => decreaseAmount(id)}
            className="px-2 border"
          >
            -
          </button>

          <div>{amount}</div>

          <button
            onClick={() => increaseAmount(id)}
            className="px-2 border"
          >
            +
          </button>
        </div>

        <div className="mt-2 font-semibold">
          $ {(price * amount).toFixed(2)}
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(id)}
        className="text-xl hover:text-red-500 transition"
      >
        <IoMdClose />
      </button>

    </div>
  );
};

export default CartItem;