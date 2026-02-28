import { useState, useEffect } from "react";

// import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      let filtered;

      if (sort) {
        filtered = data.filter(
          (item) =>
            item.category === "electronics" ||
            item.category === "jewelery"
        );
      } else {
        filtered = data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
      }

      setProducts(filtered);
    };

    fetchProducts();
  }, [sort]); // ✅ only depends on sort

  // toggle category filter
  const handleClick = () => {
    setSort((prev) => !prev);
  };

  return (
    <div>
      <Hero />

      {/* PRODUCTS GRID SECTION */}
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
            max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center my-10">
            <button
              onClick={handleClick}
              className="px-8 py-3 bg-zinc-900 hover:bg-purple-600 text-white font-semibold rounded-full tracking-widest uppercase text-sm transition-all duration-300 shadow-lg shadow-zinc-200"
            >
              {sort ? "Show Clothing" : "Explore Electronics"}
            </button>
          </div>
        </div>
      </section>

      {/* LOGIN SECTION */}
      <section className="max-w-md mx-auto my-16 p-8 bg-white border border-gray-100 rounded-[2rem] shadow-premium">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label className="text-xs font-semibold uppercase text-gray-400 ml-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 outline-none transition-all"
              placeholder="Enter your username"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="text-xs font-semibold uppercase text-gray-400 ml-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-purple-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            className="mt-4 bg-primary text-white py-4 rounded-xl font-bold hover:bg-purple-600 transition-all shadow-md active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;