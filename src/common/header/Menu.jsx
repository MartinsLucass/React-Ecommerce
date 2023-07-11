import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import classNames from "classnames";
import { routes } from "../../pages/RouterConfig";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
  }, []);

  const menuClasses = classNames("flex", {
    hidden: !showMenu,
    "flex-col space-y-4 absolute top-14 left-0 bg-white p-4 rounded-lg shadow-lg":
      showMenu,
  });

  // Mapeia as rotas e gera os links correspondentes
  const menuLinks = routes[0].children.map((route, index) => (
    <li key={index} className="text-purple-950 font-bold hover:text-purple-700 cursor-pointer">
      <Link to={route.path}>{route.title}</Link>
    </li>
  ));

  return (
    <>
      <div className="flex flex-row sm:space-x-20 space-x-8 md:space-x-11 justify-center lg:items-end items-center">
      <button className="lg:hidden flex" onClick={toggleMenu}>
        {showMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>
        <h1 className="text-3xl font-bold text-purple-950">LOJINHA</h1>
        <ul className="hidden lg:flex flex-row space-x-4 transition-transform">{menuLinks}</ul>
      </div>
      <ul ref={menuRef} className={menuClasses}>
        {menuLinks}
      </ul>
    </>
  );
};

export default Menu;