import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // ✅ Proper scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isActive
  ? "bg-white/90 backdrop-blur-md py-3 shadow-md"
  : "bg-transparent py-6"
      } fixed w-full z-50 transition-all duration-300`}
    >
      {/* ✅ Centered Container with Proper Padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="w-[40px] hover:scale-105 transition"
            src={Logo}
            alt="Logo"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          
          {/* Login */}
          <Link
  to="/login"
  className="text-sm font-medium hover:text-red-600 transition"
>
  Login
</Link>

          {/* Cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative"
          >
            <BsBag className="text-2xl hover:text-red-600 transition" />

<span
  className="absolute -top-2 -right-2 bg-red-600 text-white
  text-[11px] w-6 h-6 flex items-center justify-center
  rounded-full font-medium"
>
              {itemAmount}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;