import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 🟢 Load cart from localStorage (persistent cart)
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // 🟢 Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🟢 Calculate total price
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);

    setTotal(newTotal);
  }, [cart]);

  // 🟢 Calculate total item count
  useEffect(() => {
    const amount = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);

    setItemAmount(amount);
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  // ✅ Remove item completely
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // ✅ Increase quantity
  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, amount: item.amount + 1 }
        : item
    );
    setCart(updatedCart);
  };

  // ✅ Decrease quantity (auto remove if 0)
  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);

    if (!item) return;

    if (item.amount === 1) {
      removeFromCart(id);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;