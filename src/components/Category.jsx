import React from "react";
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaKeyboard } from "react-icons/fa";
import { BsWatch} from "react-icons/bs"

const Category = () => {
  const categories = [
    { name: "Cell Phone", icon: <FaMobileAlt /> },
    { name: "Tablet", icon: <FaTabletAlt /> },
    { name: "Smart Watch", icon: <BsWatch /> },
    { name: "Video Games", icon: <FaKeyboard /> },
    { name: "Fone", icon: <FaKeyboard /> },
  ];

  return (
    <div className="hidden sm:flex h-full">
      <ul className="flex flex-col bg-white rounded-lg shadow-md border border-zinc-300 p-2 w-full">
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex items-center justify-start py-2 px-4 h-14 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="mr-2 text-zinc-900">{category.icon}</span>
            <span className="text-lg font-semibold text-zinc-900">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
