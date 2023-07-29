import React from "react";

const CardProduct = ({ product }) => {
  const hasSale = product.original_price > product.price;
  const salePrice = hasSale ? product.price : null;

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="shadow-lg border-2 bg-white border-zinc-300 rounded-md flex flex-col items-center justify-center w-11/12 h-64 mx-3 mb-8 ">
      <img
        src={product.thumbnail}
        alt={product.title}
        className=" rounded-md mb-4"
      />
      <h3
        className="text-lg font-semibold text-center mb-2 truncate w-full px-2"
        title={product.title}
      >
        {product.title}
      </h3>
      <div className="flex flex-row items-end justify-between w-full px-4">
        {hasSale ? (
          <div className="flex flex-col items-start justify-startpx-4">
            <p className="text-sm text-gray-500 line-through mb-1 text-left  ">
              {formatPrice(product.original_price)}
            </p>
            <p className="text-lg font-semibold">{formatPrice(salePrice)}</p>
          </div>
        ) : (
          <div className="flex items-center ">
            <p className="text-lg font-semibold mb-1">
              {formatPrice(product.price)}
            </p>
          </div>
        )}
        <button className="flex items-center bg-white border-2 hover:scale-95 transition-all border-zinc-400 blue-500 text-blue-black hover:text-zinc-900 font-bold py-1 px-2 md:py-2 md:px-4 rounded-sm ">
          +
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
