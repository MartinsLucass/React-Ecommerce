import React, { useState } from "react";

const CartItem = ({ item, onRemove }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(item);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex items-center space-y-4 p-4 ">
      <div className="flex-shrink-0 w-14 mr-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold truncate w-48">{item.title}</h3>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => handleRemove(item)}
          >
            X
          </button>
        </div>

        <div className="flex items-center justify-center w-28 border-2 bg-gray-100 rounded-md">
          <button
            className="font-bold py-1 px-2 border-r border-gray-300"
            onClick={handleDecrement}
          >
            -
          </button>
          <div className="text-black px-4">{quantity}</div>
          <button
            className="font-bold py-1 px-2 border-l border-gray-300"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div className="flex  justify-between mt-2">
          <span className="text-black font-semibold">
             ${item.price * quantity}
          </span>
          <span className="text-gray-500 text-sm">
            ${item.price} por unidade
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
