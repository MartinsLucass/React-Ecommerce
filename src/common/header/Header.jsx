import React, { useState } from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Links from "./Links";
import Cart from "../../components/Cart";

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
                <Menu />
                <h1 className="text-3xl font-bold text-zinc-950">LOJINHA</h1>
              </div>
              <>
                <Links />
              </>
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
