import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home />}
    ]  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>

  )
}

export default App
