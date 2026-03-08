import React, { useContext, useEffect, useState, useRef } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag, BsPerson } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = ({ token, setToken }) => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  // 🔓 Logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowMenu(false);
    navigate("/");
  };

  // Scroll header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${
        isActive
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-6"
      } fixed w-full z-50 transition-all duration-300`}
    >
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

          {/* 👤 User Menu */}
          <div ref={menuRef} className="relative">

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl hover:text-red-600 transition"
            >
              <BsPerson />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 border">

                {!token ? (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setShowMenu(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </Link>

                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                )}

              </div>
            )}

          </div>

          {/* 🛒 Cart */}
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