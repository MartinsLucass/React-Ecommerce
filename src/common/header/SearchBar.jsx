import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
    return (
      <form className="hidden sm:flex items-center rounded-lg bg-white border border-zinc-300">
        <input
          className="sm:w-20 md:w-40 h-15 px-2 text-gray-700 outline-none bg-transparent rounded-l-lg"
          type="text"
          placeholder="Pesquisar..."
        />
        <button className="flex items-center justify-center h-10 w-10 bg-transparent rounded-r-lg">
          <AiOutlineSearch className="text-black" />
        </button>
      </form>
    );
  };
  
  export default SearchBar;