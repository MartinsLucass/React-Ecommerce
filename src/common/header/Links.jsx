import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../pages/RouterConfig";

const Links = () => {
  const menuLinks = routes[0].children.map((route, index) => (
    <li key={index} className="text-zinc-950 font-bold hover:text-zinc-700 cursor-pointer">
      <Link to={route.path}>{route.title}</Link>
    </li>
  ));

  return (
    <nav className="lg:flex">
      <ul className="md:flex hidden flex-row space-x-4 transition-transform">{menuLinks}</ul>
    </nav>
  );
};

export default Links;
