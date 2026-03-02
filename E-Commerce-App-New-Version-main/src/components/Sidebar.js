import React, { useContext, useMemo } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  /* ✅ Hooks MUST be at top level */
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  /* ✅ Always compute memo — never conditionally */
  const totalDisplay = useMemo(() => {
    return Number(total || 0).toFixed(2);
  }, [total]);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
      transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>

        <button
          onClick={handleClose}
          className="cursor-pointer py-2 px-2"
        >
          <IoMdArrowForward className="text-2xl" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            Your cart is empty
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            Total:
          </div>
          <div className="font-bold text-lg">
            $ {totalDisplay}
          </div>
        </div>

        <button
          onClick={clearCart}
          className="bg-red-500 text-white w-full py-3 rounded-md hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Sidebar;