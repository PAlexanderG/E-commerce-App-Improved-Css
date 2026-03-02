import React, { useContext, useMemo } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  const totalDisplay = useMemo(() => {
    return Number(total || 0).toFixed(2);
  }, [total]);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } fixed top-0 h-full w-full md:w-[35vw] xl:max-w-[30vw]
      bg-white shadow-2xl z-50
      transition-all duration-300
      flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 px-4 border-b">
        <div className="uppercase text-sm font-semibold tracking-wide">
          Shopping Bag ({itemAmount})
        </div>

        <button
          onClick={handleClose}
          className="cursor-pointer p-2 hover:text-red-500 transition"
        >
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 divide-y">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <div className="text-center py-16 text-gray-400">
            Your cart is empty
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-white shadow-inner">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total:</span>
          <span>$ {totalDisplay}</span>
        </div>

        <button
          onClick={clearCart}
          disabled={cart.length === 0}
          className={`w-full py-3 rounded-md text-white transition ${
            cart.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Sidebar;