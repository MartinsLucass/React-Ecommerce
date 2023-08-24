import React, { useEffect, useState } from "react";
import { useProductContext } from "../common/ProductContext";

const CartItem = ({ item, onRemove }) => {
  const { subTotal, setSubTotal } = useProductContext();
  const [quantity, setQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem(`quantity-${item.id}`);
    return storedQuantity ? parseInt(storedQuantity) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`quantity-${item.id}`, quantity);
    if (quantity === 0) {
      setQuantity(1);
      setSubTotal(subTotal + (item.price ? item.price : item.original.price));
    }
  }, [quantity]);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setSubTotal(subTotal - (item.price ? item.price : item.original.price));
    }
  };

  const handleRemove = () => {
    const removedItemTotal = item.price
      ? item.price * quantity
      : item.original.price * quantity;
    setSubTotal(subTotal - removedItemTotal);
    localStorage.removeItem(`quantity-${item.id}`);
    setQuantity(0);
    onRemove(item);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setSubTotal(subTotal + (item.price ? item.price : item.original.price));
  };

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="flex items-center space-y-4 p-4 py-6 ">
      <div className="flex-shrink-0 w-14 mr-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full overflow-hidden h-full object-contain"
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

        <div className="flex justify-between mt-2">
          <span className="text-black font-semibold">
            {formatPrice(
              item.price
                ? item.price * quantity
                : item.original.price * quantity
            )}
          </span>

          <span className="text-gray-500 text-sm">
            {formatPrice(item.price ? item.price : item.original.price)} por
            unidade
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
