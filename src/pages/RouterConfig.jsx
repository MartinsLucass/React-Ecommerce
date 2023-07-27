import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import ListProducts from "../components/ListProducts"

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
      { path: "/Category/CellPhone", element: <ListProducts  categories={["MLB1055"]} />, title: "Cell Phone" },
      { path: "/Category/Tablet", element: <ListProducts  categories={["MLB99889"]} />, title: "Tablet" },
      { path: "/Category/VideoGames", element: <ListProducts  categories={["MLB11172"]} />, title: "Video Games" },
      { path: "/Category/SmartWatch", element: <ListProducts  categories={["MLB135384"]} />, title: "Smart Watch" },
      { path: "/Search", element: <ListProducts categories={["MLB1055", "MLB99889","MLB11172", "MLB135384"]} />, title: "Search" },
    ]
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
