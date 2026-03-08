import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      console.log("LOGIN SUCCESS");
      console.log("Token:", data);

      // save token in React state
      setToken(data.token);

      // save token in localStorage
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      // redirect to profile
      navigate("/profile");

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-[300px] bg-white p-6 shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          placeholder="Username"
          className="border p-2"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className="border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white p-2 hover:bg-gray-800"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;