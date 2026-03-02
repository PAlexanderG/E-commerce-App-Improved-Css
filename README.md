# 🛍️ Fake Store API – E-Commerce Application

# 🌍 Live Demo:

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://e-commerce-app-new-version-main.vercel.app)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-purple?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-Dynamic_Routing-red?logo=reactrouter)
![Bootstrap](https://img.shields.io/badge/Bootstrap-Responsive_UI-7952B3?logo=bootstrap)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Utility_First_CSS-38B2AC?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-Educational-lightgrey)

A fully functional front-end e-commerce application built with React that consumes the Fake Store API. This project demonstrates modern frontend development practices, routing, filtering, sorting, and responsive UI design.
<img width="806" height="759" alt="Screenshot 2026-03-02 at 1 35 55 PM" src="https://github.com/user-attachments/assets/7d1098b5-5f42-427c-aff7-aba7102bff32" />
<img width="802" height="762" alt="Screenshot 2026-03-02 at 1 36 07 PM" src="https://github.com/user-attachments/assets/4b9e13fd-bf8f-4e7e-8214-95e149186f47" />
<img width="806" height="718" alt="Screenshot 2026-03-02 at 1 36 43 PM" src="https://github.com/user-attachments/assets/4a90dc02-584f-401b-a378-f256d17bb01c" />
<img width="808" height="719" alt="Screenshot 2026-03-02 at 1 36 59 PM" src="https://github.com/user-attachments/assets/06b47957-c58c-4bd7-981c-a6627f065308" />

# 📌 Project Overview

This application uses the Fake Store API to simulate a real-world e-commerce platform. Users can browse products, view detailed product pages, filter and sort items, and enjoy a responsive and modern shopping experience.

The project was built as a Minimum Viable Product (MVP) and focuses entirely on frontend development without requiring a custom backend.

# 🎯 Project Purpose

The goal of this project was to design and deploy a fully functional e-commerce user interface without building a custom backend.
The focus areas were:

- Clean component architecture
- Scalable folder structure
- API-driven UI rendering
- Client-side routing
- Dynamic filtering & sorting
- Production deployment workflow

# ✨ Core Features

- Product listing with dynamic API data
- Individual product detail pages
- Sorting (price, name)
- Filtering (category, price range)
- Responsive layout for desktop and mobile
- Client-side routing using React Router
-Production deployment on Vercel

# 🚀 Features (MVP Requirements)
As a User (Not Logged In), I Can:

- Access the deployed website via the internet
- View all available products
- View detailed information for each product:
 - Product title
 - Description
 - Image
 - Price
 - Category
- Sort products by:
 - Name
 - Price
- Filter products by:
  - Category
  - Price range
- Navigate seamlessly using client-side routing
- Enjoy a clean, responsive, and intuitive UI/UX

# 🛠️ Tech Stack
# Frontend

- React.js – Component-based UI development
- Vite – Fast build tool and development environment
- React Router – Client-side routing and navigation
- Bootstrap & React Bootstrap – Layout and responsive components
- Tailwind CSS – Utility-first styling
- JavaScript (ES6+)

# Deployment

-Vercel – Production hosting and CI/CD deployment

# 🔗 API Used

Fake Store API
https://fakestoreapi.com/

# The API provides:

- Products
- Categories
- Users
- Authentication endpoints

No backend server was required for this project.

# 🏗 Project Architecture

This project follows a component-based architecture using React.

# 📁 Folder Structure
<img width="664" height="214" alt="Screenshot 2026-03-02 at 2 36 52 PM" src="https://github.com/user-attachments/assets/a83b4311-0e39-4fcc-9544-e449c5458b4e" />

# 🧩 Application Flow

The application loads and fetches product data from the Fake Store API.
-Products are stored in React state.
-The Home page renders a list of product cards.
-React Router handles navigation between:
-Product list page
-Individual product detail pages
-Filtering and sorting update state dynamically.
-UI re-renders automatically based on state changes.

# Data Flow

-Data is fetched using asynchronous API calls (fetch or axios)
-State is managed using React hooks (useState, useEffect)
-Conditional rendering controls authentication-based features
- Routing is handled client-side using React Router

# 🔐 Authentication Challenge

The Fake Store API includes authentication endpoints and user data—one of the challenges is working with the authentication token and handling data for specific users.

An additional field provided by the API (isAuthor) is only valid for content created by the authenticated user. To handle this properly:
-I authenticated users using credentials available from the API
-Used the token returned by the login endpoint
-Ensured that user-specific content was conditionally rendered based on the authenticated user's ID
-Verified post ownership before enabling edit/delete logic

This required careful state management and conditional rendering in React.

# 🚀 Deployment & CI/CD

-This application is deployed using Vercel.
-Key deployment practices:
-Production build optimization via Vite
-Static asset handling
-Automatic deployment via Git integration
-Environment-based configuration
-Proper routing configuration for SPA refresh handling
-This simulates a real-world production deployment workflow.

# 🧠 Technical Skills Demonstrated

-REST API integration
-Asynchronous JavaScript (Promises, async/await)
-React hooks (useState, useEffect)
-Dynamic routing
-Conditional rendering
-State-driven UI updates
-Responsive design principles
-Production build optimization
-Deployment, debugging, and configuration

# 🧭 How to Use

1. Open the deployed link or run the app locally.
2. Browse the product catalog.
3. Use filters and sorting to refine results.
4. Click on a product to view detailed information.
5. (If authentication is enabled) Log in using credentials from the Fake Store API.

# 🎯 Key Learning Outcomes

-Working with external REST APIs
-Handling asynchronous data fetching
-Managing React state effectively
-Implementing dynamic routing with React Router
-Building responsive UI with Bootstrap and Tailwind
-Deploying a production-ready React app using Vercel
-Debugging deployment and build issues

# 📈 Future Improvements

-Shopping cart persistence
-Checkout flow simulation
-User registration
-Admin dashboard
-Search functionality
-Pagination
-Better error handling and loading states
-SEO optimization

# 🎥 Credits

Fake Store API
https://fakestoreapi.com/

YouTube Tutorial Inspiration
https://www.youtube.com/watch?v=lGnuiAZCjuM&t=6729s

# 📄 License

This project is for educational purposes only.
All product data belongs to Fake Store API.

## 📦 Installation

To run this project locally:

```bash
git clone https://github.com/PAlexanderG/E-commerce-App-Improved-Css.git
cd E-commerce-App-Improved-Css
npm install
npm run dev

For a production build:

npm run build
npm run preview
