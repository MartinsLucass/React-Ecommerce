import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./Home";
import Footer from "../components/Footer";
import Header from "../common/header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, title: "Home" },
      { path: "/Footer", element: <Footer />, title: "Footer" }
    ]
  },
];

const router = createBrowserRouter(routes);

export { router, routes };