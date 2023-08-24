import React, { useEffect } from "react";
import { useProductContext } from "../common/ProductContext";
import CardProduct from "../components/CardProduct";

const ListProducts = ({ categories }) => {
  const { searchProducts, allProducts, searchTerm } = useProductContext();

  useEffect(() => {
    searchProducts({ category: categories, searchTerm: searchTerm });
    console.log(searchTerm);
  }, [searchTerm, categories]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mt-32 min-h-screen overflow-hidden">
      {allProducts.length === 0 ? (
        <div className="flex justify-center items-center h-72 w-screen ">
          <p className="text-center text-2xl text-gray-600">No products found.</p>
        </div>
      ) : (
        allProducts.map((product) => (
          <div key={product.id}>
            <CardProduct product={product} />
          </div>
        ))
      )}
    </div>
  );
};

export default ListProducts;
