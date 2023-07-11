import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Icon from "./icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-center border-b-2 border-zinc-200 p-4">
      <div className="container w-full flex justify-between items-center">
      <Menu />       
        <div className="flex flex-row space-x-4">
          <SearchBar />
          <Icon />
        </div>
      </div>
    </header>
  );
};

export default Header;
