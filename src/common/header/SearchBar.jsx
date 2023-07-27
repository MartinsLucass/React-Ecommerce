import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { useProductContext } from "../ProductContext";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SearchBar = ({ showSearch, setShowSearch }) => {
  const { setSearchTerm, allProducts } = useProductContext();
  const [windowWidth, setWindowWidth] = useState(0); // Definir um valor inicial para o tamanho da janela
  const [inputTerm, setInputTerm] = useState("");

  const handleButtonClick = () => {
    if (windowWidth < 640 && !showSearch) {
      setShowSearch(!showSearch);
    }
  };

  const handleInputChange = (e) => {
    setInputTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputTerm.trim() !== "") {
      setSearchTerm(inputTerm);
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
    // Função para atualizar o tamanho da janela apenas no lado do cliente
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adicionar o ouvinte do evento resize somente no lado do cliente
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", updateWindowWidth);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateWindowWidth);
      }
    };
  }, []);

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center justify-center sm:rounded-lg rounded-full w-full">
      {showSearch && (
        <button onClick={() => setShowSearch(false)} className="mr-6">
          <AiOutlineArrowLeft size={20} className="text-black" />
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
          onChange={handleInputChange}
        />
        {inputTerm !== "" ? (
          <Link to={"/Search"} className={buttonClasses} onClick={handleButtonClick}>
            <AiOutlineSearch size={20} className="text-black" />
          </Link>
        ) : (
          <button className={buttonClasses} onClick={handleButtonClick}>
            <AiOutlineSearch size={20} className="text-black" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
