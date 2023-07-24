import React from "react";
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaKeyboard } from "react-icons/fa";
import { BsWatch} from "react-icons/bs"
import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    { name: "Cell Phone", icon: <FaMobileAlt />, path:"/Category/CellPhone"  },
    { name: "Tablet", icon: <FaTabletAlt />, path:"/Category/Tablet" },
    { name: "Smart Watch", icon: <BsWatch />, path:"/Category/SmartWatch"  },
    { name: "Video Games", icon: <FaKeyboard />,  path:"/Category/VideoGames"  },
  ];

  return (
    <div className="hidden sm:flex h-full">
      <div className="flex flex-col bg-white rounded-lg shadow-md border border-zinc-300 p-2 w-full">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="flex items-center justify-start py-2 px-4 h-14 hover:bg-gray-100 rounded-lg cursor-pointer"
            to={category.path}
          >
            <span className="mr-2 text-zinc-900">{category.icon}</span>
            <span className="text-lg font-semibold text-zinc-900">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
