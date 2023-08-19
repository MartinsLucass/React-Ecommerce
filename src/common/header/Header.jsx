import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import SearchBar from "./SearchBar";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-row items-center justify-center border-b-2 bg-zinc-100 border-zinc-200 p-4">
      <div className="container w-full flex justify-center items-center">
        {showSearch ? (
          <SearchBar setShowSearch={setShowSearch} showSearch={showSearch} />
        ) : (
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-center items-center md:space-x-0 space-x-4 bg-zinc-200 w-52 rounded-md h-12">
              <Link to={"/"} className="flex justify-end items-end">
                <div className="flex items-center space-x-2 text-zinc-700">
                  <FaShoppingBag size={24} />
                  <h1 className="text-3xl font-bold text-zinc-700">
                    LOJINHA
                  </h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-row space-x-4">
              <SearchBar setShowSearch={setShowSearch} showSearch={showSearch} />
              <Cart />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
