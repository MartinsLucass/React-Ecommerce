import React, { useState } from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Icon from "./icon";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-row items-center justify-center border-b-2 border-zinc-200 p-4">
      <div className="container w-full flex justify-between items-center">
        {showSearch ? (
          <>
            <SearchBar setShowSearch={setShowSearch} showSearch={showSearch}/>
          </>
        ) : (
          <>
            <Menu />
            <div className="flex flex-row space-x-4">
              <SearchBar setShowSearch={setShowSearch} showSearch={showSearch}/>
              <Icon />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
