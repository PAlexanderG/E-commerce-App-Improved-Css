import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import About from "./project-details/About.jsx";

const App = () => {

  // 🔐 authentication state
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>

      {/* Header */}
      <Header token={token} setToken={setToken} />

      {/* Page content */}
      <div className="pt-[90px] overflow-hidden">

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Product Page */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Login Page */}
          <Route
            path="/login"
            element={<Login setToken={setToken} />}
          />

          {/* 🔒 Protected Profile Route */}
<Route path="/profile" element={<Profile />} />

        </Routes>

      </div>

      {/* Sidebar Cart */}
      <Sidebar />

      {/* Footer */}
      <Footer />

    </Router>
  );
};

export default App;