import React from "react";

const Category = () => {
  const categories = ["Fashion", "Eletronic", "Cars", "Gifts", "Books", "Pets"];
  return (
    <div className=" w-72 ">
      <div className="flex sm:hidden">
          <button>
            category
          </button>
      </div>
      <div className="hidden sm:flex">
      <ul className="flex flex-col bg-white rounded-lg shadow-md ">
        {categories.map((category) => (
          <li key={category} className="py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default Category;
