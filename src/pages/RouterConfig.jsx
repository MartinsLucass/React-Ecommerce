import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import ListProducts from "../components/ListProducts";

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
      {
        path: "/Product", title: "Product",
      },
      {
        path: "/Category/CellPhone",
        element: <ListProducts categories={["MLB1055"]} />,
        title: "Cell Phone",
      },
      {
        path: "/Category/Tablet",
        element: <ListProducts categories={["MLB99889"]} />,
        title: "Tablet",
      },
      {
        path: "/Category/Television",
        element: <ListProducts categories={["MLB1002"]} />,
        title: "Television",
      },
      {
        path: "/Category/SmartWatch",
        element: <ListProducts categories={["MLB135384"]} />,
        title: "Smart Watch",
      },
      {
        path: "/Category/HeadFone",
        element: <ListProducts categories={["MLB196208"]} />,
        title: "Head Fone",
      },

      {
        path: "/Category/LG",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "LG",
      },
      {
        path: "/Category/Samsung",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "motorola",
      },
      {
        path: "/Category/Motorola",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "apple",
      },
      {
        path: "/Category/Apple",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "samsung",
      },
      {
        path: "/Category/Xaiomi",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "Xaiomi",
      },

      {
        path: "/Search",
        element: (
          <ListProducts
            categories={[
              "MLB1055" /*cellphone*/,
              "MLB99889" /*tablet*/,
              "MLB1002" /*television*/,
              "MLB135384" /*smartwatch*/,
              "MLB196208" /*headfone*/,
            ]}
          />
        ),
        title: "Search",
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
