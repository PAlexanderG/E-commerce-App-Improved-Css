import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Project Details
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Production-ready E-Commerce frontend built with React and Vite
        </p>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            📌 Project Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is a fully responsive E-Commerce web application built using
            React and Vite, powered by the Fake Store API. The application
            allows users to browse products, view detailed product pages,
            filter and sort items, and experience a clean, intuitive shopping
            interface.
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            ✨ Core Features
          </h2>
          <ul className="space-y-3 text-gray-600 list-disc list-inside">
            <li>Dynamic product listing from external REST API</li>
            <li>Individual product detail pages</li>
            <li>Sorting and filtering functionality</li>
            <li>Client-side routing with React Router</li>
            <li>Responsive UI with Tailwind CSS</li>
            <li>Authentication flow structure</li>
            <li>Production deployment ready</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            🛠 Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Vite", "JavaScript", "Tailwind CSS", "React Router"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg 
            hover:bg-red-700 hover:scale-105 transition-all duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;