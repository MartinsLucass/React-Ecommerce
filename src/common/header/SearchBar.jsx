import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { useProductContext } from "../ProductContext";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ showSearch, setShowSearch }) => {
  const { setSearchTerm } = useProductContext();
  const [windowWidth, setWindowWidth] = useState(0);
  const [inputTerm, setInputTerm] = useState("");
  const navigate = useNavigate();
  const searchBarRef = useRef(null);

  const handleButtonClick = () => {
    if (windowWidth < 640 && showSearch === false) {
      setShowSearch(true);
    }
  };

  const closeSearchBar = () => {
    setShowSearch(false);
  };

  const handleOutsideClick = (e) => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
      closeSearchBar();
    }
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      closeSearchBar();
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", updateWindowWidth);
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWindowWidth);
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(inputTerm);
    navigate("/Search");
    closeSearchBar();
  };

  const handleInputChange = (e) => {
    setInputTerm(e.target.value);
  };

  const inputClasses = classNames({
    "sm:flex hidden": !showSearch,
    flex: showSearch || true,
    "w-full sm:w-40 md:w-56 h-10 px-2 text-gray-700 outline-none bg-transparent rounded-l-lg p-4": true,
  });

  const buttonClasses = classNames(
    "flex items-center justify-center sm:bg-transparent sm:rounded-l-lg rounded-full border-zinc-300 h-10 w-10 sm:text-gray-500",
    {
      "bg-zinc-200 w-10 h-10 text-black": !showSearch,
      "bg-transparent w-16 text-gray-500": showSearch,
    }
  );

  return (
    <div className="flex items-center justify-center sm:rounded-lg rounded-full w-full">
      {showSearch && (
        <button onClick={() => setShowSearch(false)} className="mr-6">
          <AiOutlineArrowLeft size={20} className="text-black" />
        </button>
      )}
      <form
        ref={searchBarRef}
        onSubmit={handleFormSubmit}
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
          placeholder="Search..."
          type="text"
          onChange={handleInputChange}
        />
        <button className={buttonClasses} onClick={handleButtonClick}>
          <AiOutlineSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
