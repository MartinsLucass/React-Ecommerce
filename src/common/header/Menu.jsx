import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { routes } from "../../pages/RouterConfig";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
    setShowCategory(false);
  };
  const mainLinks = routes[0].children.map((route, index) => (
    <div
      key={index}
      className="p-0.5 mt-3 flex items-center px-4 cursor-pointer "
    >
      <Link
        to={route.path}
        className="text-black font-bold cursor-pointer text-2xl hover:text-zinc-900"
        onClick={closeMenu}
      >
        {route.title}
      </Link>
    </div>
  ));

 

  const categories = ["Fashion", "Electronics", "Cars", "Gifts", "Books", "Pets"].map((category, index) => (
    <div
      key={index}
      className="p-0.5 mt-3 flex items-center px-4 cursor-pointer hover:text-zinc-700 text-xl"
    >
      <Link to={category.path} className="text-black font-bold cursor-pointer hover:text-zinc-900" onClick={closeMenu}>
        {category}
      </Link>
    </div>
  ));

  return (
    <div>
      <div className={`fixed top-0 bottom-0 left-0 p-2 md:w-[300px] sm:w-[250px] w-full overflow-auto text-center bg-zinc-100 z-50 transition-all duration-500 transform ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="text-black text-xl">
          <div className="p-3 mt-1 flex items-center justify-end mb-4 border-b-2 border-zinc-900">
            <button onClick={closeMenu}>
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="p-0.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <button onClick={() => setShowCategory(!showCategory)} className="text-black text-2xl font-bold cursor-pointer hover:text-zinc-900">
              Category
            </button>
          </div>
          {showCategory && <div className="pl-6">{categories}</div>}
          {mainLinks}
        </div>
      </div>
      {!showMenu && (
        <button
          className="md:hidden flex justify-center items-start"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <FaBars size={25} />
        </button>
      )}
    </div>
  );
};

export default MobileMenu;
