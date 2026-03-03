import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import About from "./project-details/About";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <Router>
      <Header />

      {/* 👇 Only page content gets header spacing */}
      <div className="pt-[90px] overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
        </Routes>
      </div>

      <Sidebar />
      <Footer />
    </Router>
  );
};

export default App;