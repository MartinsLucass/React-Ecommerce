import React, { useEffect } from "react";
import { useProductContext } from "../common/ProductContext";
import CardProduct from "./CardProduct";

const ListProducts = ({ categories }) => {
  const { searchProducts, allProducts, searchTerm } = useProductContext();

  useEffect(() => {
    searchProducts({ category: categories, searchTerm: searchTerm });
    console.log(searchTerm);
  }, [searchTerm, categories]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-8">
      {allProducts.map((product) => (
        <div key={product.id}>
          <CardProduct product={product} />
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
