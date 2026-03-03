import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logIn = async (username, password) => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();

      if (!result.token) {
        throw new Error("Invalid credentials");
      }

      return result.token;
    } catch (err) {
      throw err;
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    try {
      const token = await logIn(username, password);

      localStorage.setItem("token", token);
      setToken(token);

      navigate("/"); // ✅ go to homepage after login
    } catch (err) {
      setError("Login failed. Try again.");
    }
  }

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">

    {/* 🔙 Back Home Link */}
    <Link
      to="/"
      className="absolute top-8 left-8 text-sm font-medium text-gray-600 hover:text-black transition"
    >
      ← Back to Home
    </Link>

    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-bold mb-8">Welcome Back</h1>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
 );
}