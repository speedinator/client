import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import { Children } from "react";
import "./app.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
         path:"/",
         element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      }
    ]
  },

])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;