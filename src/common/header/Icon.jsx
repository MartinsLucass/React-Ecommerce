import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Icon = () => {
  return (
    <div className="flex space-x-4 text-black">
      <Link
        to="/"
        className="bg-zinc-200 p-2 rounded-full flex items-center justify-center transition transform hover:scale-90"
      >
        <AiOutlineHeart size={25} />
      </Link>
      <Link
        to="/"
        className="bg-zinc-200 p-2 rounded-full flex items-center justify-center transition transform hover:scale-90"
      >
        <AiOutlineShoppingCart size={25} />
      </Link>
    </div>
  );
};

export default Icon;
