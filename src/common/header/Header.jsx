import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-row items-center justify-center border-b-2 bg-zinc-100 border-zinc-200 p-4">
      <div className="container w-full flex justify-center items-center">
        {showSearch ? (
          <>
            <SearchBar setShowSearch={setShowSearch} showSearch={showSearch} />
          </>
        ) : (
          <>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center items-center md:space-x-0 space-x-4">
                
                <Link to={"/"}>
                  <h1 className="text-3xl font-bold text-zinc-950">LOJINHA</h1>
                </Link>
              </div>
              <div className="flex flex-row space-x-4">
                <SearchBar
                  setShowSearch={setShowSearch}
                  showSearch={showSearch}
                />
                <Cart />
                
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
