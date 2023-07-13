import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import classNames from "classnames";

const SearchBar = ({ showSearch, setShowSearch }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (windowWidth < 640 && !showSearch) {
      setShowSearch(!showSearch);
    }
  };

  const inputClasses = classNames({
    "sm:flex hidden": !showSearch,
    flex: showSearch || true,
    "w-full sm:w-40 md:w-56 h-10 px-2 text-gray-700 outline-none bg-transparent rounded-l-lg p-4": true,
  });

  const buttonClasses = classNames(
    "flex items-center justify-center sm:bg-transparent sm:rounded-l-lg rounded-full border-zinc-300 h-10 w-10",
    {
      "bg-zinc-200 w-10 h-10": !showSearch,
      "bg-transparent w-16": showSearch,
    }
  );

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (!event.target.closest("form")) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowSearch(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <form className="flex items-center justify-center sm:rounded-lg rounded-full w-full">
      {showSearch && (
        <button onClick={() => setShowSearch(false)} className="mr-6">
          <AiOutlineArrowLeft size={25} className="text-black" />
        </button>
      )}
      <div
        className={classNames(
          "flex flex-row items-center justify-between bg-white",
          {
            "border sm:border-lg rounded-full sm:rounded-lg": !showSearch,
            "border rounded-lg w-full": showSearch,
          }
        )}
      >
        <input
          className={inputClasses}
          type="text"
          placeholder="Pesquisar..."
        />
        <button className={buttonClasses} onClick={handleButtonClick}>
          <AiOutlineSearch size={20} className="text-black" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
